// button/test/Button.spec.ts
import MyButton from "../index";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe('MyButton', () => {
  // mount
  test("mount slots", () => {
    const wrapper = shallowMount(MyButton, {
      slots: {
        default: 'MyButton'
      }
    });

    // 断言
    expect(wrapper.text()).toBe("MyButton");

  });
})