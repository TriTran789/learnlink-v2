export type IRole = "root" | "student" | "teacher";

declare global {
  namespace Express {
    interface Request {
      user?: JWTPayload;
    }
  }
}

export type JWTPayload = {
  role: IRole;
  id: string;
  profileId: string;
};
