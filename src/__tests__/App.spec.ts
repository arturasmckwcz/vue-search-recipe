import { describe, test, expect } from "vitest";
import { mount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  test("should mount App", () => {
    const wrapper = mount(App);
    expect(wrapper.html()).toContain("router-view></router-view>");
  });
});
