import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLayout = ({children, pagina}) => {
  return (
    <>
      <Head>
        <title>{`Cafe - ${pagina}`}</title>
        <meta name="description" content="Quiosco Cafetería" />
      </Head>
      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
          <Image
            width={300}
            height={100}
            src="/img/logo.svg"
            alt="imagen logotipo"
          />
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
      </div>
      <ToastContainer />
    </>
  )
}

export default AdminLayout