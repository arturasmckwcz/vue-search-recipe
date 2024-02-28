import { describe, expect, test, vi } from "vitest";
import { mount } from "@vue/test-utils";

import NavBar from "../NavBar.vue";

describe("unit testing <NavBar/>", () => {
  test("renders defaults desktop size", () => {
    const wrapper = mount(NavBar, {
      global: { stubs: ["router-link"] },
    });

    expect(wrapper.find('[data-test="navbar-meal-db"]').exists()).toBeTruthy();
    expect(wrapper.find('[data-test="navbar-home"]').exists()).toBeTruthy();
    expect(
      wrapper.find('[data-test="navbar-menu-bar-x"]').exists()
    ).toBeTruthy();
    expect(
      wrapper.find('[data-test="navbar-menu-bar-y"]').exists()
    ).toBeFalsy();
  });
});
