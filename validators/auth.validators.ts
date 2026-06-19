import { z } from "zod";

export const signupSchema = z.object({
  companyName: z.string().min(2, "Company name is required"),

  ownerName: z.string().min(2, "Owner name is required"),

  email: z.string().email("Invalid email"),

  password: z.string().min(8, "Password must be at least 8 characters"),

  phone: z.string().min(10),

  address: z.string().optional(),

  gstNumber: z.string().optional(),
});

export type SignupInput = z.infer<typeof signupSchema>;