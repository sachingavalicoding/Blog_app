import * as z from "zod";

export const SignupValidation = z.object({
  username: z.string().min(2).max(50),
  name: z
    .string()
    .min(2, { message: "To short Name" })
    .max(50, { message: "To Big Name " }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Password Must be 8 characters " }),
});
