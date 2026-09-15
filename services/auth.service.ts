import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { generateToken } from "@/lib/jwt";
import { SignupInput } from "@/validators/auth.validators";

export async function signup(data: SignupInput) {
  // Check if email already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create company
  const company = await prisma.company.create({
    data: {
      name: data.companyName,
      phone: data.phone,
      address: data.address,
      gstNumber: data.gstNumber,
    },
  });

  // Create owner user
  const user = await prisma.user.create({
    data: {
      name: data.ownerName,
      email: data.email,
      password: hashedPassword,
      role: "OWNER",
      companyId: company.id,
    },
  });

  // Generate JWT
  const token = generateToken({
    userId: user.id,
    companyId: company.id,
    role: user.role,
  });

  // Return safe response
  return {
    token,
    company,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}
export async function login(email: string, password: string) {
  console.log("EMAIL RECEIVED:", email);
  console.log("PASSWORD RECEIVED:", password);

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  console.log("USER FOUND:", user);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const valid = await bcrypt.compare(password, user.password);

  console.log("PASSWORD MATCH:", valid);

  if (!valid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    userId: user.id,
    companyId: user.companyId,
    role: user.role,
  });

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}