import useQuiosco from "@/hooks/useQuiosco"
import Layout from "@/components/layout/Layout"
import Producto from "@/components/Producto"

export default function Home() {
  const { categoriaActual } = useQuiosco()

  return (
    <Layout
      // TODO - Utilizar Default Props para que no cargue en Undefined
      pagina={`Menu ${categoriaActual?.nombre}`} 
    >
      <h1 className="text-4xl font-black">{categoriaActual?.nombre}</h1>
      <p className="text-2xl my-10">Elige y personaliza tu pedido a continuacion</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {categoriaActual?.productos?.map(producto => (
          <Producto key={producto.id} producto={producto} />
        ))}
      </div>
    </Layout>
  )
}