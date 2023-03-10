import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"

const Categoria = ({categoria}) => {
  const { categoriaActual, handleCategoriaActual } = useQuiosco()
  const { id, nombre, icono } = categoria

  return (
    <div className={`flex items-center gap-4 w-full border p-5 hover:bg-amber-400 ${categoriaActual?.id === id && 'bg-amber-400'}`}>
      <Image 
        src={`/img/icono_${icono}.svg`} 
        alt={`Icono Categoria ${nombre}`} 
        width={70} 
        height={70} 
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleCategoriaActual(id)}
      >
        {nombre}
      </button>
    </div>
  )
}

export default Categoria