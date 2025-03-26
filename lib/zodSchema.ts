import {z} from 'zod'

export const companySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  location: z.string().min(1, { message: "Location is required" }),
  about: z
    .string()
    .min(10, { message: "About must be at least 10 characters" }),
  logo: z.string().url({ message: "Logo must be a valid URL" }).optional(),
  website: z
    .string()
    .url({ message: "Website must be a valid URL" })
    .optional(),
  xAccount: z
    .string()
    .startsWith("@", { message: "X (Twitter) handle must start with @" })
    .optional(),
});