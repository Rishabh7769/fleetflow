import { UserRole } from "@/generated/prisma/client";

export const PERMISSIONS = {
  MANAGE_USERS: [UserRole.OWNER],

  MANAGE_VEHICLES: [
    UserRole.OWNER,
    UserRole.MANAGER,
  ],

  MANAGE_DRIVERS: [
    UserRole.OWNER,
    UserRole.MANAGER,
  ],

  MANAGE_CUSTOMERS: [
    UserRole.OWNER,
    UserRole.MANAGER,
    UserRole.DISPATCHER,
  ],

  MANAGE_TRIPS: [
    UserRole.OWNER,
    UserRole.MANAGER,
    UserRole.DISPATCHER,
  ],

  VIEW_DASHBOARD: [
    UserRole.OWNER,
    UserRole.MANAGER,
    UserRole.DISPATCHER,
  ],
};