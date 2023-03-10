import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import { formatearDinero } from "@/helpers"

const Producto = ({producto}) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco()
  const { nombre, imagen, precio } = producto

  return (
    <div className="border p-3">
      <Image 
        src={`/img/${imagen}.jpg`} 
        alt={`Imagen Platillo ${nombre}`} 
        width={200} 
        height={300} 
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {formatearDinero(precio)}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold"
          onClick={() => {
            handleChangeModal()
            handleSetProducto(producto)
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  )
}

export default Producto