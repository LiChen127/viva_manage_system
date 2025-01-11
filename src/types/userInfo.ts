/**
 * user info type
 */
export enum Role {
  admin = 'admin',
  superAdmin = 'superAdmin',
  user = 'user'
}

export interface UserInfo {
  userId: string;
  username: string;
  nickname: string;
  role: Role;
}