export interface ISessionUser {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
  userId: string;
}

export interface ISession {
  user: {
    name: string;
    email: string;
    image: string;
    id: string;
  };
}
