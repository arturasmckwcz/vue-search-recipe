import { describe, expect, test } from "vitest";
import { VueWrapper, mount } from "@vue/test-utils";

import ButtonYT from "../ButtonYT.vue";
import { afterEach } from "node:test";

describe("unit testing <ButtonYT/>", () => {
  let wrapper: VueWrapper;

  afterEach(() => {
    wrapper.unmount();
  });

  test("renders defaults", () => {
    wrapper = mount(ButtonYT);

    expect(wrapper.html()).toContain("YouTube");
    expect(wrapper.html()).toContain('href="https://youtube.com"');
    expect(wrapper.html()).toContain("text-base");
    expect(wrapper.html()).toContain("youtube-logo-png-2067.png");
  });

  test("renders provided child", () => {
    wrapper = mount(ButtonYT, {
      slots: {
        default: "provided child",
      },
    });

    expect(wrapper.html()).toContain("provided child");
  });

  test("renders provided size", () => {
    wrapper = mount(ButtonYT, {
      props: {
        size: "2xl",
      },
    });

    expect(wrapper.html()).toContain("text-2xl");
  });

  test("renders default size if random is provided", () => {
    wrapper = mount(ButtonYT, {
      props: {
        size: "random" as any,
      },
    });

    expect(wrapper.html()).toContain("text-base");
  });

  test("renders provided href", () => {
    wrapper = mount(ButtonYT, {
      props: {
        href: "/href/provided",
      },
    });

    expect(wrapper.html()).toContain('href="/href/provided"');
  });
});
