export enum AllRoles {
  ADMIN = 'admin',
  MANAGER = 'manager',
}

export interface ReqUser {
  id: string;
  role: AllRoles;
}

export class ErrorOutDto<T = unknown> {
  readonly success: boolean;

  readonly error: T;

  constructor(error: any) {
    this.success = false;
    this.error = error?.response?.data || error?.message;
  }
}

export interface SuccessDefaultOut {
  status: 'success';
}

export class SuccessOutDto<T = unknown> {
  readonly success: boolean;

  readonly data: T | SuccessDefaultOut;

  constructor(data?: T) {
    this.success = true;
    this.data = data || { status: 'success' };
  }
}

export type HttpOut<S = unknown, E = unknown> = Promise<
  SuccessOutDto<S> | ErrorOutDto<E>
>;
