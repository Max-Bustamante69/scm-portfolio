import { z, defineCollection } from "astro:content";

const experiences = defineCollection({
  schema: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    startDate: z.number(),
    endDate: z.union([z.number(), z.literal("Present")]),
    skills: z.array(z.string()),
    description: z.string(),
    icon: z.string().optional(),
    percentage: z.number().optional(),
    link: z.string().optional(),
  }),
});

const skills = defineCollection({
  schema: z.object({
    skillName: z.string(),
    description: z.string(),
    proficiency: z.number(),
    categories: z.array(
      z.enum(["Frontend", "Backend", "Testing", "DevOps", "Design"])
    ),
    icon: z.string().optional(),
  }), 
});

const results = defineCollection({
  schema: z.object({
    statistic: z.string(),
    name: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  experiences,
  skills,
  results,
};
