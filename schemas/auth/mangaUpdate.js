import Joi from "joi";

const mangaUpdate = Joi.object({
  title: Joi.string().min(4).max(30).message({
    "string.min": "The title must contain a minimum of 4 characters.",
    "string.max": "The title should be no longer than 30 characters.",
    "string.required": "The title is required.",
  }),
  description: Joi.string().min(10).message({
    "string.min": "The description must consist of a minimum of 10 characters.",
    "string.empty": "The description is required.",
  }),
  cover_photo: Joi.string().uri().message({
    "string.uri": "Invalid url",
  }),
  category_id: Joi.optional(),
});

export default mangaUpdate;
