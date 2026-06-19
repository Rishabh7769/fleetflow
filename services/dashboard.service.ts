import { prisma } from "@/lib/prisma";
export async function getDashboard(companyId: string) {
  const [
    totalTrips,
    activeTrips,
    completedTrips,
    totalVehicles,
    availableVehicles,
    runningVehicles,
    totalDrivers,
    activeDrivers,
    driversOnTrip,
    revenue,
    expenses,
    recentTrips,
  ] = await Promise.all([
    prisma.trip.count({
      where: { companyId },
    }),

    prisma.trip.count({
      where: {
        companyId,
        status: "STARTED",
      },
    }),

    prisma.trip.count({
      where: {
        companyId,
        status: "COMPLETED",
      },
    }),

    prisma.vehicle.count({
      where: { companyId },
    }),

    prisma.vehicle.count({
      where: {
        companyId,
        status: "AVAILABLE",
      },
    }),

    prisma.vehicle.count({
      where: {
        companyId,
        status: "ON_TRIP",
      },
    }),

    prisma.driver.count({
      where: { companyId },
    }),

    prisma.driver.count({
      where: {
        companyId,
        status: "ACTIVE",
      },
    }),

    prisma.driver.count({
      where: {
        companyId,
        status: "ON_TRIP",
      },
    }),

    prisma.trip.aggregate({
      where: {
        companyId,
        status: "COMPLETED",
      },
      _sum: {
        freightAmount: true,
      },
    }),

    prisma.tripExpense.aggregate({
      where: {
        companyId,
      },
      _sum: {
        amount: true,
      },
    }),

    prisma.trip.findMany({
      where: {
        companyId,
      },
      take: 5,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        customer: true,
        driver: true,
        vehicle: true,
      },
    }),
  ]);

  return {
    totalTrips,
    activeTrips,
    completedTrips,

    totalVehicles,
    availableVehicles,
    runningVehicles,

    totalDrivers,
    activeDrivers,
    driversOnTrip,

    totalRevenue: revenue._sum.freightAmount ?? 0,
    totalExpenses: expenses._sum.amount ?? 0,

    recentTrips,
  };
}