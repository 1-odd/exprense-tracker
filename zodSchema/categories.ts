import zod from 'zod'

export const CreateCategorySchema = zod.object({
  name: zod.string().min(3).max(20),
  type:zod.enum(["income","expense"]),
  icon: zod.string().max(20),
});

export type CreateCategorySchemaType = zod.infer<typeof CreateCategorySchema>;