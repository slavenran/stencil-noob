import { h, Component, Prop, State } from "@stencil/core";
import { Validator, ValidatorEntry } from "../validators/validator";
import { defaultValidator, getValidator } from "../validators/validator.factory";

@Component({
  tag: "form-test",
  styleUrl: "form-test.scss",
  shadow: true
})
export class FormTest {

  @Prop() usernameValidator: Array<string | ValidatorEntry> = [{name: 'length', options: {min: 5, max: 25}}];
  @Prop() emailValidator: Array<string | ValidatorEntry> = ['email'];
  @Prop() telephoneValidator: Array<string | ValidatorEntry> = ['telephone'];
  @Prop() zipValidator: Array<string | ValidatorEntry> = ['zip'];
  @Prop() genderValidator: Array<string | ValidatorEntry> = [{name: 'length', options: {min: 5, max: 25}}];

  @State() username: string = "";
  @State() email: string = "";
  @State() telephone: string = "";
  @State() zip: string = "";
  @State() gender: string = "";

  @State() isSubmitted: boolean = false;

  _usernameValidator: Validator<string> = defaultValidator;
  _emailValidator: Validator<string> = defaultValidator;
  _telephoneValidator: Validator<string> = defaultValidator;
  _zipValidator: Validator<string> = defaultValidator;
  _genderValidator: Validator<string> = defaultValidator;

  handleSubmit(e) {
    e.preventDefault()
    this.isSubmitted = true;
  }

  handleChanges(e, value: string) {
    this[value] = e.target.value;
  }

  updateValidators() {
    this._usernameValidator = getValidator(this.usernameValidator);
    this._emailValidator = getValidator(this.emailValidator);
    this._telephoneValidator = getValidator(this.telephoneValidator);
    this._zipValidator = getValidator(this.zipValidator);
    this._genderValidator = getValidator(this.genderValidator);
  }

  componentWillLoad() {
    this.updateValidators();
  }

  componentWillUpdate() {
    this.updateValidators();
  }

  render () {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          Username:
          <input type="text" value={this.username} onInput={(e) => this.handleChanges(e, 'username')} />
          {(this.isSubmitted && !this._usernameValidator.validate(this.username)) && <div class="error">{this._usernameValidator.errorMessage}</div>}
        </div>
        <div>
          E-mail:
          <input type="email" value={this.email} onInput={(e) => this.handleChanges(e, 'email')} />
          {(this.isSubmitted && !this._emailValidator.validate(this.email)) && <div class="error">{this._emailValidator.errorMessage}</div>}
        </div>
        <div>
          Telephone:
          <input type="tel" value={this.telephone} onInput={(e) => this.handleChanges(e, 'telephone')} />
          {(this.isSubmitted && !this._telephoneValidator.validate(this.telephone)) && <div class="error">{this._telephoneValidator.errorMessage}</div>}
        </div>
        <div>
          ZIP:
          <input type="text" value={this.zip} onInput={(e) => this.handleChanges(e, 'zip')} />
          {(this.isSubmitted && !this._zipValidator.validate(this.zip)) && <div class="error">{this._zipValidator.errorMessage}</div>}
        </div>
        <div>
          Gender:
          <input type="text" value={this.gender} onInput={(e) => this.handleChanges(e, 'gender')} />
          {(this.isSubmitted && !this._genderValidator.validate(this.gender)) && <div class="error">{this._genderValidator.errorMessage}</div>}
        </div>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}