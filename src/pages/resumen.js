import useQuiosco from "@/hooks/useQuiosco"
import Layout from "@/components/layout/Layout"
import ResumenProducto from "@/components/ResumenProducto"

export default function Resumen() {
  const { pedido } = useQuiosco()

  return (
    <Layout
      pagina='Resumen'
    >
      <h1 className="text-4xl font-black">Resumen</h1>
      <p className="text-2xl my-10">Revisa tu pedido</p>

      {!pedido.length ? (
        <p className="text-center text-2xl">No hay productos en tu pedido</p>
      ) : (
        pedido.map(producto => (
          <ResumenProducto key={producto.id} producto={producto} />
        ))
      )}
    </Layout>
  )
}