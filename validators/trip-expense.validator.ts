import { z } from "zod";

export const createTripExpenseSchema = z.object({
  type: z.enum([
    "FUEL",
    "TOLL",
    "DRIVER",
    "REPAIR",
    "FOOD",
    "PARKING",
    "OTHER",
  ]),

  amount: z.coerce.number().positive(),

  description: z.string().optional(),

  expenseDate: z.string().datetime(),
});

export type CreateTripExpenseInput =
  z.infer<typeof createTripExpenseSchema>;