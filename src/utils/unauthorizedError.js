class unauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

export default unauthorizedError;
