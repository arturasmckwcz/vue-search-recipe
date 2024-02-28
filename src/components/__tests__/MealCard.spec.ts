import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";

import MealCard from "../MealCard.vue";
import { Meal } from "../../store/types";

describe("unit testing <MealCard/>", () => {
  const mealAttrs: Partial<Meal> = {
    strArea: "some-area",
    strCategory: "some-category",
  };
  test("displays with tooltip", () => {
    const longName = "This is a very long meal name";

    const wrapper = mount(MealCard, {
      shallow: true,
      props: { meal: { strMeal: longName, ...mealAttrs } },
      global: { stubs: ["v-tooltip", "router-link", "ButtonYT"] },
    });

    const tooltip = wrapper.find("v-tooltip-stub");
    expect(tooltip.attributes("disabled")).toBe("false");
  });

  test("displays full name without tooltip", () => {
    const shortName = "Short Name";
    const wrapper = mount(MealCard, {
      props: { meal: { strMeal: shortName, ...mealAttrs } },
      global: { stubs: ["v-tooltip", "router-link", "ButtonYT"] },
    });

    const tooltip = wrapper.find("v-tooltip-stub");
    expect(tooltip.attributes("disabled")).toBe("true");
  });

  test("displays area and category", () => {
    const shortName = "Short Name";
    const wrapper = mount(MealCard, {
      props: { meal: { strMeal: shortName, ...mealAttrs } },
      global: { stubs: ["v-tooltip", "router-link", "ButtonYT"] },
    });

    expect(wrapper.html()).toContain(mealAttrs.strArea);
    expect(wrapper.html()).toContain(mealAttrs.strCategory);
  });
});
