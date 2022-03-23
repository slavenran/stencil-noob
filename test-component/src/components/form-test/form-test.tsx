import { h, Component, Prop, Watch, State } from "@stencil/core";
import { Validator } from "../validators/validator";
import { defaultValidator, validatorFactory } from "../validators/validator.factory";

@Component({
  tag: "form-test",
  styleUrl: "form-test.scss",
  shadow: true
})
export class FormTest {

  @Prop() validator: string = "email";

  @Prop({mutable: true}) value: string;
  @State() valueError: string = "";

  @State() isSubmitted: boolean = false;

  _validator: Validator<string> = defaultValidator;

  componentWillLoad() {
    this._validator = validatorFactory(this.validator);
  }

  componentWillUpdate() {
    this._validator = validatorFactory(this.validator);
  }

  // @Watch("value")
  // validateInput(newValue: string, _oldValue?: string) {
  //   this.valueError = "";
  //   if (this.isSubmitted) {
  //     // don't allow `thingToDo` to be the empty string  
  //     const isBlank = typeof newValue !== 'string' || newValue === '';
  //     if (isBlank) { 
  //         this.valueError = 'thingToDo is a required property and cannot be empty'
  //     };
  //     // don't allow `thingToDo` to be a string with a length of 1
  //     const has2chars = typeof newValue === 'string' && newValue.length >= 2;
  //     if (!has2chars) {
  //         this.valueError = 'thingToDo must have a length of more than 1 character'
  //     };
  //   }
  // }

  handleSubmit(e) {
    e.preventDefault()
    this.isSubmitted = true;
    // this.validateInput(this.value);
    console.log(this.value);
  }

  handleChanges(e) {
    this.value = e.target.value;
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <label>
          Name:
          <input type="text" value={this.value} onInput={(e) => this.handleChanges(e)} />
          {(this.isSubmitted && !this._validator.validate(this.value)) && <div class="error">{this._validator.errorMessage}</div>}
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}