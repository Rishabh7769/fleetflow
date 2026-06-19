import { z } from "zod";

export const createDriverSchema = z.object({
  name: z.string().min(2),

  email: z.string().email().optional(),

  phone: z.string().min(10).max(15),

  licenseNumber: z.string().min(5),

  licenseExpiry: z.string().datetime(),

  address: z.string().optional(),

  emergencyName: z.string().optional(),

  emergencyPhone: z.string().optional(),

  bloodGroup: z.string().optional(),
});

export type CreateDriverInput = z.infer<typeof createDriverSchema>;