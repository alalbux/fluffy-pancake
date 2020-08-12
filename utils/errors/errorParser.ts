interface IMessage {
  id: string;
  message: string;
}

interface IMessages {
  messages: Array<IMessage>;
}

interface IException {
  data: Array<IMessages>;
  isBoom: Boolean;
  isServer: Boolean;
  stacktrace: Array<any>;
}

interface IExtensions {
  data: Array<any>;
  isBoom: Boolean;
  isServer: Boolean;
  message: string;
  code: number;
  exception: IException;
}

interface IError {
  message: string;
  locations?: Array<any>;
  path?: Array<string>;
  extensions: IExtensions;
}

interface IErrors {
  errors: Array<IError>;
  data?: any;
}

interface IErrorResponse {
  data: IErrors;
  status: number;
  statusText: string;
  headers?: any;
  config?: any;
  request?: any;
}

class ErrorParser {
  errors: Array<IMessage>;
  statusCode: number;

  constructor(errorResponse: IErrorResponse) {
    this.statusCode = errorResponse.status;
    this.errors =
      errorResponse.data.errors[0].extensions.exception.data[0].messages;
  }

  getExceptionStatusCode(): number {
    return this.statusCode;
  }

  getErrors(): Array<IMessage> {
    return this.errors;
  }
}

export default ErrorParser;
