/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';

export const protobufPackage = 'auth';

export enum UserType {
  ADMIN = 0,
  TEACHER = 1,
  STUDENT = 2,
  UNRECOGNIZED = -1,
}

/** Register */
export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: UserType;
}

export interface RegisterResponse {
  status: number;
  error: string[];
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
}

/** Login */
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: number;
  error: string[];
  token: string;
}

/** Validate */
export interface ValidateRequest {
  token: string;
}

export interface ValidateResponse {
  status: number;
  error: string[];
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  type: UserType;
}

export const AUTH_PACKAGE_NAME = 'auth';

export interface AuthServiceClient {
  register(request: RegisterRequest): Observable<RegisterResponse>;

  login(request: LoginRequest): Observable<LoginResponse>;

  validate(request: ValidateRequest): Observable<ValidateResponse>;
}

export interface AuthServiceController {
  register(
    request: RegisterRequest,
  ):
    | Promise<RegisterResponse>
    | Observable<RegisterResponse>
    | RegisterResponse;

  login(
    request: LoginRequest,
  ): Promise<LoginResponse> | Observable<LoginResponse> | LoginResponse;

  validate(
    request: ValidateRequest,
  ):
    | Promise<ValidateResponse>
    | Observable<ValidateResponse>
    | ValidateResponse;
}

export function AuthServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ['register', 'login', 'validate'];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('AuthService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const AUTH_SERVICE_NAME = 'AuthService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
