import {createUserService} from "./user.service.js";
import {catchAsync} from "../../../utils/catchAsync.js";
import {sendResponse} from "../../../utils/sendResponse.js";

//create an user
export const createUser = catchAsync(async (req, res, next) => {
  const data = req.body;
  const newUser = await createUserService(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User created successfully!",
    data: newUser,
  });
});
