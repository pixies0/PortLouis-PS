export class AppError extends Error {
  status: number;
  constructor(status = 400, message = 'Bad Request') {
    super(message);
    this.status = status;
  }
}
