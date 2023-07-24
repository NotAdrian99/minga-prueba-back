import User from "../../models/User.js";

export default async (req, res, next) => {
  try {
    let one = await User.findOneAndUpdate({ email: req.body.email }, { online: true }, { new: true });
    console.log(one, "oneeeeeeeeeeeeeeeeeeeeeeeeeee");
    delete one.password;
    return res.status(200).json({
      success: true,
      message: "user signed in!",
      response: {
        user: one.email,
        photo: one.photo,
        token: req.token,
        role: one.role,
      },
    });
  } catch (error) {
    return next();
  }
};
