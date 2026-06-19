import { z } from "zod";

export const createVehicleSchema = z.object({
  registrationNumber: z.string().min(3),

  manufacturer: z.string().min(2),

  model: z.string().min(1),

  year: z.number().int().min(1980).max(2100),

  vehicleType: z.string(),

  fuelType: z.enum([
    "DIESEL",
    "PETROL",
    "CNG",
    "LNG",
    "ELECTRIC",
  ]),

  capacity: z.number().positive(),


});

export type CreateVehicleInput = z.infer<
  typeof createVehicleSchema
>;