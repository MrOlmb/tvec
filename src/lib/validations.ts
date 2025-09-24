import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Le nom doit contenir au moins 2 caractères')
    .max(50, 'Le nom ne peut pas dépasser 50 caractères'),
  email: z
    .string()
    .email('Veuillez entrer une adresse email valide')
    .min(1, 'L\'email est requis'),
  company: z
    .string()
    .min(2, 'Le nom de l\'entreprise doit contenir au moins 2 caractères')
    .max(100, 'Le nom de l\'entreprise ne peut pas dépasser 100 caractères'),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || val.length >= 10, {
      message: 'Le numéro de téléphone doit contenir au moins 10 chiffres'
    }),
  subject: z
    .string()
    .min(1, 'Le sujet est requis')
    .max(100, 'Le sujet ne peut pas dépasser 100 caractères'),
  message: z
    .string()
    .min(10, 'Le message doit contenir au moins 10 caractères')
    .max(1000, 'Le message ne peut pas dépasser 1000 caractères'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;