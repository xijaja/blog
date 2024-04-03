import { z, defineCollection } from "astro:content";

// 定义集合
const blogCollection = defineCollection({
  type: "content", // 集合类型, content 为内容集合
  schema: z.object({
    title: z.string(), // 标题
    date: z.string(), // 日期
    desc: z.string().optional(), // 描述
    draft: z.boolean().optional().default(false), // 是否为草稿
  }),
});

// 导出一个 `collections` 对象来注册集合
// 这个键应该与 `src/content` 中的集合目录名匹配
export const collections = {
  blog: blogCollection,
};
