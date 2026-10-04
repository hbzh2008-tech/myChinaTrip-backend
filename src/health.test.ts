import { describe, expect, it } from "vitest";
import { createHealthResponse } from "@chinatrip/shared";

describe("api health contract", () => {
  it("matches shared schema", () => {
    expect(createHealthResponse("api")).toEqual({ ok: true, service: "api" });
  });
});
