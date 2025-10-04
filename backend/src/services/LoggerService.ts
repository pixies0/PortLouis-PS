class LoggerService {
  static info(message: string, meta?: Record<string, unknown>) {
    console.log(`[INFO]: ${message}`, meta ?? '');
  }

  static warn(message: string, meta?: Record<string, unknown>) {
    console.warn(`[WARN]: ${message}`, meta ?? '');
  }

  static error(message: string, meta?: Record<string, unknown>) {
    console.error(`[ERROR]: ${message}`, meta ?? '');
  }

  static debug(message: string, meta?: Record<string, unknown>) {
    console.debug(`[DEBUG]: ${message}`, meta ?? '');
  }
}

export default LoggerService;
