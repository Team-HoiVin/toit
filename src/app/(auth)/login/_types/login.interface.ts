import type { SubmitHandler } from 'react-hook-form';

export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginSubmit {
  onSubmit: SubmitHandler<ILogin>;
}
