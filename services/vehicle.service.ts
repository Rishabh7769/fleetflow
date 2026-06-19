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