import { prisma } from "@/lib/prisma";
import { CreateDriverInput } from "@/validators/driver.validator";

export async function createDriver(
  data: CreateDriverInput,
  companyId: string
) {
  return prisma.driver.create({
    data: {
      ...data,
      licenseExpiry: new Date(data.licenseExpiry),
      companyId,
    },
  });
}

export async function getDrivers(companyId: string) {
  return prisma.driver.findMany({
    where: {
      companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getDriverById(
  id: string,
  companyId: string
) {
  return prisma.driver.findFirst({
    where: {
      id,
      companyId,
    },
  });
}

export async function updateDriver(
  id: string,
  companyId: string,
  data: Partial<CreateDriverInput>
) {
  const driver = await prisma.driver.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!driver) {
    throw new Error("Driver not found");
  }

  return prisma.driver.update({
    where: {
      id,
    },
    data: {
      ...data,
      ...(data.licenseExpiry && {
        licenseExpiry: new Date(data.licenseExpiry),
      }),
    },
  });
}

export async function deleteDriver(
  id: string,
  companyId: string
) {
  const driver = await prisma.driver.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!driver) {
    throw new Error("Driver not found");
  }

  return prisma.driver.delete({
    where: {
      id,
    },
  });
}