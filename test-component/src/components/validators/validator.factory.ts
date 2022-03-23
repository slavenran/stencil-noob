import { EmailValidator } from "./custom-validators/email-validator";
import { Validator } from "./validator";

export enum ValidatorsName {
  email = 'email'
}

export function validatorFactory(name: string): Validator<any> {
  switch(name) {
    case (ValidatorsName.email):
      return EmailValidator;
    default:
      return defaultValidator;
  }
}

export const defaultValidator: Validator<any> = {
  validate: (_x: any) => true
}