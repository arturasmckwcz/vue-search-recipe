import { afterEach, describe, expect, test } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";

import NotFound from "../NotFound.vue";

describe("unit testing <NotFound/>", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  test("renders defaults", () => {
    wrapper = mount(NotFound);

    expect(wrapper.html()).toContain("<p>MEALS NOT FOUND.</p>");
  });

  test("renders provided slot", () => {
    wrapper = mount(NotFound, {
      slots: {
        default: "provided slot",
      },
    });

    expect(wrapper.html()).toContain("<p>provided slot NOT FOUND.</p>");
  });
});
