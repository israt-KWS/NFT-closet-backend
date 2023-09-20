import httpStatus from "http-status";
import {ApiError} from "../../../handleError/apiError.js";
import {User} from "./user.model.js";

// create user / signUp user
export const createUserService = async (userInfo) => {
  const newUser = await User.create(userInfo);
  if (!newUser) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Failed to create user");
  }
  return newUser;
};
