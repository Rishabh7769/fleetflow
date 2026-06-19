import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string().min(2),

  companyName: z.string().optional(),

  phone: z.string().min(10).max(15),

  email: z.string().email().optional(),

  gstNumber: z.string().optional(),

  address: z.string().optional(),
});

export type CreateCustomerInput = z.infer<
  typeof createCustomerSchema
>;