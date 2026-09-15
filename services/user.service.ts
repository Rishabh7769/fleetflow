import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { CreateUserInput } from "@/validators/user.validator";

export async function createUser(
  data: CreateUserInput,
  companyId: string
) {
  const existing = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existing) {
    throw new Error("Email already exists");
  }

  const password = await bcrypt.hash(data.password, 10);

  return prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password,
      role: data.role,
      companyId,
    },
  });
}

export async function getUsers(companyId: string) {
  return prisma.user.findMany({
    where: {
      companyId,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  });
}
export async function updateUser(
  id: string,
  companyId: string,
  data: Partial<CreateUserInput>
) {
  const user = await prisma.user.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  const updateData: any = {
    ...data,
  };

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10);
  }

  return prisma.user.update({
    where: {
      id,
    },
    data: updateData,
  });
}

export async function deleteUser(
  id: string,
  companyId: string
) {
  const user = await prisma.user.findFirst({
    where: {
      id,
      companyId,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return prisma.user.delete({
    where: {
      id,
    },
  });
}