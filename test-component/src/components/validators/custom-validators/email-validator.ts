import { Validator } from "../validator";

export const EmailValidator: Validator<string> = {
  validate: (value: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  },
  errorMessage: "Enter a valid email"
}