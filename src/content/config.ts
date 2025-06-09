import { z, defineCollection } from "astro:content";

const experiences = defineCollection({
  schema: z.object({
    jobTitle: z.string(),
    companyName: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    skills: z.array(z.string()),
    description: z.string(),
    icon: z.string().optional(),
    percentage: z.number().optional(),
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
