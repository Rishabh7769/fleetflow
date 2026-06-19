import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { CreateTripExpenseInput } from "@/validators/trip-expense.validator";
export async function createTripExpense(
  tripId: string,
  companyId: string,
  data: CreateTripExpenseInput
) {
  const trip = await prisma.trip.findFirst({
    where: {
      id: tripId,
      companyId,
    },
  });

  if (!trip) {
    throw new Error("Trip not found");
  }

  return prisma.tripExpense.create({
    data: {
      tripId,
      companyId,
      type: data.type,
      amount: new Prisma.Decimal(data.amount),
      title: data.description,
      expenseDate: new Date(data.expenseDate),
    },
  });
}
export async function getTripExpenses(
  tripId: string,
  companyId: string
) {
  return prisma.tripExpense.findMany({
    where: {
      tripId,
      companyId,
    },
    orderBy: {
      expenseDate: "desc",
    },
  });
}