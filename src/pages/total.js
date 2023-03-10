import { useEffect } from "react"
import useQuiosco from "@/hooks/useQuiosco"
import Layout from "@/components/layout/Layout"
import { formatearDinero } from "@/helpers"

export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useQuiosco()

  useEffect(() => {
    if(!comprobarPedido()) return console.log( 'Pedido Inorrecto' )
    console.log( 'Pedido Correcto' )
  }, [pedido, nombre])
  
  const comprobarPedido = () => {
    // pedido.length -> si hay algo -> true; si no hay nada -> false
    return pedido.length > 0 && nombre
  }

  return (
    <Layout
      pagina='Total y Confirmar Pedido'
    >
      <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuacion</p>

      <form
        onSubmit={colocarOrden}
      >
        <div>
          <label 
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre
          </label>
          <input 
            type="text" 
            name="nombre" 
            id="nombre" 
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            placeholder="Coloca tu nombre aqui"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {''}
            <span className="font-bold">
              {formatearDinero(total)}
            </span>
          </p>
        </div>
        <div className="mt-5">
          <input 
            type="submit" 
            value="Confirmar pedido" 
            className={`${!comprobarPedido() ? 'bg-indigo-100' : 'bg-indigo-600'} w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            disabled={!comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  )
}