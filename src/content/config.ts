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
    icon: z.string(),
    proficiency: z.number(),
  }),
});

export const collections = {
  experiences, skills,
};
