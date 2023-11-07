/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'

const rollupOptions = {
  // TODO: view rollup usage
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({

  plugins: [
    vue(),
    vueJsx(),
    UnoCSS(),
  ],
  build: {
    rollupOptions,
    minify: 'terser', // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: "./entry.ts",
      name: "FishUI",
      fileName: "fish-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },

  test: {
    // 使用类似 jest 中的全局 API
    globals: true,
    environment: 'happy-dom'
  }
});