import z from 'zod';

export const signInSchema = z.object({
  emailOrUsername: z
    .string()
    .min(3)
    .max(20)
    .refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
      return emailRegex.test(value) || usernameRegex.test(value);
    }, 'Must be a valid email or username'),
  password: z.string().min(6),
});

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  username: z.string().min(3).max(20),
  email: z.string().email().nonempty('Email is required.'),
  password: z.string().min(6),
});
