import { h, Component, Prop, State } from "@stencil/core";
import { Validator, ValidatorEntry } from "../validators/validator";
import { defaultValidator, getValidator } from "../validators/validator.factory";

@Component({
  tag: "form-test",
  styleUrl: "form-test.scss",
  shadow: true
})
export class FormTest {

  @Prop() validator: Array<string | ValidatorEntry> = [{name: 'length', options: {min: 8}}, 'email'];

  @State() value: string = "";

  @State() isSubmitted: boolean = false;

  _validator: Validator<string> = defaultValidator;

  handleSubmit(e) {
    e.preventDefault()
    this.isSubmitted = true;
  }

  handleChanges(e) {
    this.value = e.target.value;
  }

  componentWillLoad() {
    this._validator = getValidator(this.validator);
  }

  componentWillUpdate() {
    this._validator = getValidator(this.validator);
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