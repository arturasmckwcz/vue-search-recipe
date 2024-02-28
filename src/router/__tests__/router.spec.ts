import { describe, it, expect } from "vitest";
import router from "../index"; // Import your router instance

describe("router", () => {
  describe("resolution of paths", () => {
    it("resolves the home route", () => {
      const resolved = router.resolve({ name: "home" });

      expect(resolved.fullPath).toBe("/");
      expect(
        Object.values(
          resolved.matched[0] && resolved.matched[0].components
            ? resolved.matched[0].components.default
            : {}
        )
      ).toContain("DefaultLayout");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("MealsByKeyword");
    });

    it("resolves the mealDetails route with ID", () => {
      const resolved = router.resolve({
        name: "mealDetails",
        params: { id: 123 },
      });

      expect(resolved.fullPath).toBe("/meal/123");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("MealDetails");
    });

    it("resolves the areas route", () => {
      const resolved = router.resolve({
        name: "areas",
      });

      expect(resolved.fullPath).toBe("/areas");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("Areas");
    });

    it("resolves the categories route", () => {
      const resolved = router.resolve({ name: "categories" });

      expect(resolved.fullPath).toBe("/categories");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("Categories");
    });

    it("resolves the ingredients route", () => {
      const resolved = router.resolve({ name: "ingredients" });

      expect(resolved.fullPath).toBe("/ingredients");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("Ingredients");
    });

    it("resolves the byACI route with and ACI and its value", () => {
      const resolved = router.resolve({
        name: "byACI",
        params: { aci: "areas", payload: "British" },
      });

      expect(resolved.fullPath).toBe("/by-aci/areas/British");
      expect(resolved.name).toBe("byACI");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("MealsByACI");
    });

    it("resolves the byLetter route with a letter", () => {
      const resolved = router.resolve({ path: "/by-letter/B" });

      expect(resolved.fullPath).toBe("/by-letter/B");
      expect(resolved.name).toBe("byLetter");
      expect(
        Object.values(
          resolved.matched[1] && resolved.matched[1].components
            ? resolved.matched[1].components.default
            : {}
        )
      ).toContain("MealsByLetter");
    });

    it("resolves the random route", () => {
      const resolved = router.resolve({ path: "/random" });

      expect(resolved.fullPath).toBe("/random");
      expect(resolved.name).toBe("404");
    });
  });
});
