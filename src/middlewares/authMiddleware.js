import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";
import { ApiError } from "../utils/ApiError";
import User from "../models/user.model";

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken || req.header("Authorization")?.split(" ")[1];

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized: Token not provided");
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decoded?._id).select(
      "-password -refreshToken"
    );
    if (!user) {
      throw new ApiError(401, "Invalid Access Token");
    }
    req.user = user; // Assuming you want to attach user information to the request object
    next();
  } catch (error) {
    throw new ApiError(500, error?.message || "Inavlid Access Token");
  }
});
