export interface User {
  _id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ValidateUser {
  userId: string;
  email: string;
  name: string;
}
