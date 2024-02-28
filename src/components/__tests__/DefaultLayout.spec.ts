import { afterEach, describe, expect, test } from "vitest";
import { VueWrapper, shallowMount } from "@vue/test-utils";

import DefaultLayout from "../DefaultLayout.vue";

describe("unit testing <DefaultLayout/>", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  test("renders defaults", () => {
    wrapper = shallowMount(DefaultLayout);

    expect(wrapper.html()).toContain("<navbar-stub></navbar-stub>");
    expect(wrapper.html()).toContain("<router-view></router-view>");
  });
});
