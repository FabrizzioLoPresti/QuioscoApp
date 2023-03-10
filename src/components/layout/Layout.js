import Head from "next/head"
import useQuiosco from "@/hooks/useQuiosco"
import Modal from 'react-modal'
import { ToastContainer } from "react-toastify"
import Sidebar from "../Sidebar"
import Pasos from "../Pasos"
import ModalProducto from "../ModalProducto"
import 'react-toastify/dist/ReactToastify.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

Modal.setAppElement('#__next')

const Layout = ({children, pagina}) => {
  // TODO - Solucionar Scroll que queda en la posicion anterior
  // TODO - Problema de tener 3 Paginas Distintas (Pedido, Resumen, Total) es que al cambiar en medio de la Animacion del Toast esta desaparece
  const { modal } = useQuiosco()
  return (
    <>
      <Head>
        <title>{`Cafe - ${pagina}`}</title>
        <meta name="description" content="Quiosco Cafe" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Pasos />
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <Modal
          isOpen={modal}
          style={customStyles}
        >
          <ModalProducto />
        </Modal>
      )}

      <ToastContainer />
    </>
  )
}

export default Layout