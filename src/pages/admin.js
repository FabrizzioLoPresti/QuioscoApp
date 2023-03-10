import useSWR from "swr"
import axios from 'axios'
import AdminLayout from "@/components/layout/AdminLayout"
import Orden from "@/components/Orden"

export default function Admin() {
  const fetcher = async () => await axios.get('/api/ordenes').then(datos => datos.data)
  const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {
    refreshInterval: 100
  })

  return (
    <AdminLayout
      pagina='Admin'
    >
      <h1 className="text-4xl font-black">Panel de Administracion</h1>
      <p className="text-2xl my-10">Administra las Ordenes</p>
      {data?.length ? (
        data.map(orden => (
          <Orden key={orden.id} orden={orden} />
        ))
      ) : 'No hay ordenes pendientes' }
    </AdminLayout>
  )
}