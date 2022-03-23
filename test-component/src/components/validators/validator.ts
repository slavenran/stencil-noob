export interface Validator<A> {
  validate: (x: A) => boolean;
  errorMessage?: string;
}

export interface ValidatorEntry {
  name: string,
  options?: any;
}