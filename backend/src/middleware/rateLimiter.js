import rateLimiter from "../config/upstash.js";

const rateLimiting = async (req, res, next) => {
  try {
    const { success } = await rateLimiter.limit("my-limit-key");

    if (!success)
      res.status(429).json({
        message: "too many req, please try again later",
      });
      next();
  } catch (err) {
    console.log("please check your ratelimiter");
    res.status(404).json({
      message: "ratelimiter issue",
    });
  }
};

export default rateLimiting;
