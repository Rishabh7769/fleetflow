import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma/client";
import { CreateTripInput } from "@/validators/trip.validator";export async function createTrip(
  data: CreateTripInput,
  companyId: string
) {
  return prisma.trip.create({
    data: {
      ...data,
      freightAmount: new Prisma.Decimal(data.freightAmount),
      advanceReceived: new Prisma.Decimal(data.advanceReceived),
      companyId,
      tripNumber: `TRIP-${Date.now()}`
    },
  });
}export async function getTrips(companyId: string) {
  return prisma.trip.findMany({
    where: {
      companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      customer: true,
      driver: true,
      vehicle: true,
    },
  });
}export async function getTripById(
  id: string,
  companyId: string
) {
  return prisma.trip.findFirst({
    where: {
      id,
      companyId,
    },
    include: {
      customer: true,
      driver: true,
      vehicle: true,
    },
  });
}
export async function updateTrip(
  id: string,
  companyId: string,
  data: Partial<CreateTripInput>
) {
  const trip = await prisma.trip.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!trip) {
    throw new Error("Trip not found");
  }

  return prisma.trip.update({
    where: {
      id,
    },
    data: {
      ...data,
      ...(data.freightAmount !== undefined && {
        freightAmount: new Prisma.Decimal(data.freightAmount),
      }),
      ...(data.advanceReceived !== undefined && {
        advanceReceived: new Prisma.Decimal(data.advanceReceived),
      }),
    },
  });
}
export async function startTrip(
  id: string,
  companyId: string
) {
  return prisma.$transaction(async (tx) => {
    const trip = await tx.trip.findFirst({
      where: {
        id,
        companyId,
      },
    });

    if (!trip) {
      throw new Error("Trip not found");
    }

    if (trip.status !== "CREATED") {
      throw new Error("Trip cannot be started");
    }

    await tx.trip.update({
      where: {
        id,
      },
      data: {
        status: "STARTED",
        startDate: new Date(),
      },
    });

    await tx.vehicle.update({
      where: {
        id: trip.vehicleId,
      },
      data: {
        status: "ON_TRIP",
      },
    });

    await tx.driver.update({
      where: {
        id: trip.driverId,
      },
      data: {
        status: "ON_TRIP",
      },
    });

    return {
      success: true,
    };
  });
}
export async function completeTrip(
  id: string,
  companyId: string
) {
  return prisma.$transaction(async (tx) => {
    const trip = await tx.trip.findFirst({
      where: {
        id,
        companyId,
      },
    });

    if (!trip) {
      throw new Error("Trip not found");
    }

    if (trip.status !== "STARTED") {
      throw new Error("Trip is not started");
    }

    await tx.trip.update({
      where: {
        id,
      },
      data: {
        status: "COMPLETED",
        deliveryDate: new Date(),
      },
    });

    await tx.vehicle.update({
      where: {
        id: trip.vehicleId,
      },
      data: {
        status: "AVAILABLE",
      },
    });

    await tx.driver.update({
      where: {
        id: trip.driverId,
      },
      data: {
        status: "ACTIVE",
      },
    });

    return {
      success: true,
    };
  });
}