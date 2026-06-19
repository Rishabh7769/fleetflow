import { prisma } from "@/lib/prisma";
import { CreateCustomerInput } from "@/validators/customer.validator";

export async function createCustomer(
  data: CreateCustomerInput,
  companyId: string
) {
  return prisma.customer.create({
    data: {
      ...data,
      companyId,
    },
  });
}

export async function getCustomers(
  companyId: string
) {
  return prisma.customer.findMany({
    where: {
      companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getCustomerById(
  id: string,
  companyId: string
) {
  return prisma.customer.findFirst({
    where: {
      id,
      companyId,
    },
  });
}

export async function updateCustomer(
  id: string,
  companyId: string,
  data: Partial<CreateCustomerInput>
) {
  const customer = await prisma.customer.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!customer) {
    throw new Error("Customer not found");
  }

  return prisma.customer.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteCustomer(
  id: string,
  companyId: string
) {
  const customer = await prisma.customer.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!customer) {
    throw new Error("Customer not found");
  }

  return prisma.customer.delete({
    where: {
      id,
    },
  });
}