import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event: any) => {
  const { params } = event.context

  let product = await prisma.products.findFirst({
    where: { id: Number(params.id) }
  })

  return product
})