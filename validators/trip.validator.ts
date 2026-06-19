import { z } from "zod";

export const createTripSchema = z.object({
  customerId: z.string().min(1),

  driverId: z.string().min(1),

  vehicleId: z.string().min(1),

  pickupAddress: z.string().min(2),

  pickupCity: z.string().min(2),

  pickupState: z.string().min(2),

  pickupPincode: z.string().optional(),

  deliveryAddress: z.string().min(2),

  deliveryCity: z.string().min(2),

  deliveryState: z.string().min(2),

  deliveryPincode: z.string().optional(),

  freightAmount: z.coerce.number().positive(),

  advanceReceived: z.coerce.number().min(0),

  expectedDeliveryDate: z.string().datetime(),

  remarks: z.string().optional(),
});

export type CreateTripInput = z.infer<typeof createTripSchema>;