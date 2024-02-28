import { afterEach, describe, expect, test } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";

import Loading from "../Loading.vue";

describe("unit testing <Loading/>", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  test("renders defaults", () => {
    wrapper = mount(Loading);

    expect(wrapper.html()).toContain("<p>LOADING MEALS...</p>");
  });

  test("renders provided slot", () => {
    wrapper = mount(Loading, {
      slots: {
        default: "provided slot",
      },
    });

    expect(wrapper.html()).toContain("<p>LOADING provided slot...</p>");
  });
});
