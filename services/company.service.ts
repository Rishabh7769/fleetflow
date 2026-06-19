import { prisma } from "@/lib/prisma";
import { CompanyInput } from "@/validators/company.validator";

export async function createCompany(data: CompanyInput) {
  const company = await prisma.company.create({
    data,
  });
  return company;
}

export async function getCompanies() {
  return await prisma.company.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}
