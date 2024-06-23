export interface EmailResponse {
  msg: string;
}

export interface User {
  id: number;
  email: string;
  drafter_prompt: string;
  sources: string;
}

export interface ErrorResponse {
  error: string;
}
