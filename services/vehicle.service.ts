import { prisma } from "@/lib/prisma";
import { CreateVehicleInput } from "@/validators/vehicle.validator";

export async function createVehicle(
  data: Omit<CreateVehicleInput, "companyId">,
  companyId: string
) {
  return prisma.vehicle.create({
    data: {
      ...data,
      companyId,
    },
  });
}

export async function getVehicles(companyId: string) {
  return prisma.vehicle.findMany({
    where: {
      companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getVehicleById(
  id: string,
  companyId: string
) {
  return prisma.vehicle.findFirst({
    where: {
      id,
      companyId,
    },
  });
}

export async function updateVehicle(
  id: string,
  companyId: string,
  data: Partial<CreateVehicleInput>
) {
  const vehicle = await prisma.vehicle.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  return prisma.vehicle.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteVehicle(
  id: string,
  companyId: string
) {
  const vehicle = await prisma.vehicle.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!vehicle) {
    throw new Error("Vehicle not found");
  }

  return prisma.vehicle.delete({
    where: {
      id,
    },
  });
}