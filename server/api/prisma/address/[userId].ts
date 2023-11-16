import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event: any) => {
  const { params } = event.context

  const res = await prisma.addresses.findFirst({
    where: { userId: params.id }
  })

  return res
})