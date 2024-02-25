import { describe, it, expect } from "vitest";
import router from "../index"; // Import your router instance

describe("router", () => {
  describe("resolution of paths", () => {
    it("resolves the home route", () => {
      expect(router.resolve({ path: "/" }).fullPath).toBe("/");
    });
    it("resolves the mealDetails route with ID", () => {
      const resolved = router.resolve({ path: "/meal/123" });

      expect(resolved.fullPath).toBe("/meal/123");
      expect(resolved.name).toBe("mealDetails");
    });

    it("resolves the areas route", () => {
      const resolved = router.resolve({ path: "/areas" });

      expect(resolved.fullPath).toBe("/areas");
      expect(resolved.name).toBe("areas");
    });

    it("resolves the categories route", () => {
      const resolved = router.resolve({ path: "/categories" });

      expect(resolved.fullPath).toBe("/categories");
      expect(resolved.name).toBe("categories");
    });

    it("resolves the ingredients route", () => {
      const resolved = router.resolve({ path: "/ingredients" });

      expect(resolved.fullPath).toBe("/ingredients");
      expect(resolved.name).toBe("ingredients");
    });

    it("resolves the byACI route with and ACI and its value", () => {
      const resolved = router.resolve({ path: "/by-aci/areas/British" });

      expect(resolved.fullPath).toBe("/by-aci/areas/British");
      expect(resolved.name).toBe("byACI");
    });

    it("resolves the byLetter route with a letter", () => {
      const resolved = router.resolve({ path: "/by-letter/B" });

      expect(resolved.fullPath).toBe("/by-letter/B");
      expect(resolved.name).toBe("byLetter");
    });

    it("resolves the random route", () => {
      const resolved = router.resolve({ path: "/random" });

      expect(resolved.fullPath).toBe("/random");
      expect(resolved.name).toBe("404");
    });
  });
});
