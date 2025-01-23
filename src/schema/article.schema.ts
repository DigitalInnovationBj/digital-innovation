import { z } from "zod";

export const ArticleSchema = z.object({
    "title": z.string(),
    "content": z.string(),
    "image": z.string().nullable(),
    "category": z.string(),
    "tags": z.array(z.string()).nullable(),
    "slug": z.string(),
    "published": z.boolean(),
    "createdAt": z.date(),
    "updatedAt": z.date().nullable(),
})

export type ArticleSchemaType = z.infer<typeof ArticleSchema>