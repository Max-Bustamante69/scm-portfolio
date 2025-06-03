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

export const collections = {
  experiences,
};
