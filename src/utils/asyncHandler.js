// export const asyncHandler = (fn) => async (req, res,next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success : true,
//             message : error.message
//         })
//     }
// };
export const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      const customError = {
        status: error.code || 500, // Use the provided status code or default to 500
        message: error.message || "Internal Server Error", // Use the provided message or a default one
      };

      // Pass the custom error to the next middleware
      next(customError);
    });
  };
};
