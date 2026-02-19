import joi from "joi";

export const userValidationSchema = joi.object({
  username: joi
    .string()
    .trim()
    .min(1)
    .custom((value) => {
      return value
        .toLowerCase()
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    })
    .required(),

  email: joi.string().trim().email().required(),

  age: joi.number().positive().required(),
});
