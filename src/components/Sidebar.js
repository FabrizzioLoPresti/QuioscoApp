import Image from "next/image"
import useQuiosco from "@/hooks/useQuiosco"
import Categoria from "./Categoria"

const Sidebar = () => {
  const { categorias } = useQuiosco()

  return (
    <>
      <Image src={'/img/logo.svg'} alt={'Logo Cafe'} width={300} height={100} />
      <nav className="mt-10">
        {categorias.map(categoria => (
          <Categoria key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </>
  )
}

export default Sidebar