import { UserRole } from "@/generated/prisma/client";

export function authorize(
  userRole: UserRole,
  allowedRoles: UserRole[]
) {
  if (!allowedRoles.includes(userRole)) {
    throw new Error("Forbidden");
  }
}