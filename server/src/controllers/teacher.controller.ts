import { Request, Response } from "express";

export const createTeacher = async (req: Request, res: Response) => {
  try {
    res
      .status(201)
      .json({ success: true, message: "Teacher created successfully" });
  } catch (errror) {
    console.log(errror);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
