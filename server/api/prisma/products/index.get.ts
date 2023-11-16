import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const query: any = getQuery(event)
  
  if (query.search) {
    let items = await prisma.products.findMany({
      take: 5, // Max rows
      where: {
        title: {
          contains: query.search,
          mode: 'insensitive'
        },
      },
    })
  
    return items
  } else {
    let products = await prisma.products.findMany()
    return products
  }
})