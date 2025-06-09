import { z } from "zod";

export const ContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  companyName: z.string().min(1, "Company name is required"),
  contact: z
    .string()
    .regex(/^\+\d{1,3}\s?\d{4,}$/, "Enter a valid phone number with country code")
    .optional()
    .or(z.literal("")),
  email: z.string().email("Enter a valid email"),
  message: z.string().optional(),
});

export type ContactForm = z.infer<typeof ContactSchema>;
