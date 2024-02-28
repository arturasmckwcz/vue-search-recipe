import { describe, expect, test, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

import MenuBar from "../MenuBar.vue";

describe("unit testing <MenuBar/>", () => {
  test("renders defaults desktop size", () => {
    const wrapper = shallowMount(MenuBar, {
      global: { stubs: ["router-link"] },
      props: { childClass: "childClass_prop" },
    });

    expect(wrapper.findAll(".childClass_prop").length).toBe(4);
    expect(wrapper.find('[data-test="menubar-areas"]').exists()).toBeTruthy();
    expect(
      wrapper.find('[data-test="menubar-categories"]').exists()
    ).toBeTruthy();
    expect(
      wrapper.find('[data-test="menubar-ingredients"]').exists()
    ).toBeTruthy();
    expect(
      wrapper.find('[data-test="menubar-byLetter"]').exists()
    ).toBeTruthy();
  });
});
