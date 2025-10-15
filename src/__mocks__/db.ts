import { vi } from "vitest";
import { mockDeep } from "vitest-mock-extended";
import { PrismaClient } from "@prisma/client";

export const prismaClient = mockDeep<PrismaClient>();
