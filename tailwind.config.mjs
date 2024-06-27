/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
  // 配置 daisyui 插件主题
  daisyui: {
    styled: true, // 是否启用 daisyui 的样式
    themes: ["light", "dark", "dim", "emerald"], // 更改它可以使用其他主题
    base: true, //  是否启用基本样式
    utils: true, // 是否启用工具类
    logs: false, // 是否启用日志 (在控制台中显示 daisyui 的日志)
    rtl: false, // 是否启用 rtl 模式 (从右到左)
    prefix: "", // 更改前缀
    darkTheme: "dark", // 指定暗色主题
  },
};
