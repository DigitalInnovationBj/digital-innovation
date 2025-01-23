import { z } from "zod";

export const CategorySchema = z.object({
    "name": z.string(),
    "createdAt": z.date(),
    "updatedAt": z.date().nullable(),
})

export const TagSchema = z.object({
    "name": z.string(),
    "createdAt": z.date(),
    "updatedAt": z.date().nullable(),
})

export const CommentsSchema = z.object({
    "author_name": z.string(),
    "content": z.string(),
    "article_id" : z.string(),
    "createdAt": z.date(),
    "updatedAt": z.date().nullable(),
})

export type CommentSchemaType = z.infer<typeof CommentsSchema>
export type CategorySchemaType = z.infer<typeof CategorySchema>
export type TagSchemaType = z.infer<typeof TagSchema>