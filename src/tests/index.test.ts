import { describe, expect, it, vi } from "vitest";
import { prismaClient } from "../db.js";
import request from "supertest";
import { app } from "../index.js";

vi.mock("../db");

describe("Test the sum function", () => {
  it("should return 3 when 1 + 2", async () => {
    const res = await request(app).post("/sum").send({
      a: 1,
      b: 2,
    });

    expect(res.body.answer).toBe(3);
  });
});
