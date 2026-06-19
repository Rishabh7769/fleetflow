import { z } from "zod";

export const companySchema = z.object({
  name: z.string().min(2, "Company name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().optional(),
  gstNumber: z.string().optional(),
});

export type CompanyInput = z.infer<typeof companySchema>;