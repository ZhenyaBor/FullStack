export interface User {
  id: number;
  userName: string;
  roles: string[];
  dateCreate: string;
  email: string;
  profile: {
    id: number;
    firstName: string;
    lastName: string;
  };
}
