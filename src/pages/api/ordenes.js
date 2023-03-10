import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  // Obtener Ordenes
  if(req.method === 'GET') {
    const ordenes = await prisma.orden.findMany({
      where: {
        estado: false
      }
    })
    res.status(200).json(ordenes)
  }

  // Crear Ordenes
  if(req.method === 'POST') {
    const { nombre, total, pedido, fecha } = req.body
    const orden = await prisma.orden.create({
      data: {
        nombre,
        total,
        pedido,
        fecha
      }
    })
    res.status(200).json({orden})
  }
}