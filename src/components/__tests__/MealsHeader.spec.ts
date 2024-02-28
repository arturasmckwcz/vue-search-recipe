import { describe, expect, test } from "vitest";
import { shallowMount } from "@vue/test-utils";

import MealsHeader from "../MealsHeader.vue";

describe("unit testing <MealsHeader/>", () => {
  test("renders defaults", () => {
    const wrapper = shallowMount(MealsHeader, {
      props: { title: "Title_prop", by: "By_prop", value: "Value_prop" },
    });

    expect(wrapper.html()).toContain("Title_prop");
    expect(wrapper.html()).toContain("By_prop");
    expect(wrapper.html()).toContain("Value_prop");
  });
});
