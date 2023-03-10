import { useState, useEffect, createContext } from "react"
import { useRouter } from "next/router"
import { toast } from 'react-toastify'
import axios from 'axios'

const QuioscoContext = createContext()

const QuioscoProvider = ({children}) => {
  const [categorias, setCategorias] = useState([])
  const [categoriaActual, setCategoriaActual] = useState({})
  const [producto, setProducto] = useState({})
  const [modal, setModal] = useState(false)
  const [pedido, setPedido] = useState([])
  const [nombre, setNombre] = useState('')
  const [total, setTotal] = useState(0)
  const router = useRouter()

  useEffect(() => {
    obtenerCategorias()
  }, [])

  useEffect(() => {
    setCategoriaActual(categorias[0])
  }, [categorias])

  useEffect(() => {
    setTotal(pedido.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0))
  }, [pedido])

  const obtenerCategorias = async () => {
    try {
      const { data } = await axios.get('/api/categorias')
      setCategorias( data )
    } catch (error) {
      console.log( error )
    }
  }

  const handleCategoriaActual = id => {
    setCategoriaActual(categorias.filter(categoriaState => categoriaState.id === id)[0])
    router.push('/')
  }

  const handleSetProducto = producto => {
    setProducto(producto)
  }

  const handleChangeModal = () => {
    setModal(!modal)
    setProducto({})
  }

  const handleAgregarPedido = ({ categoriaId, ...producto }) => {
    if(pedido.some(productoState => productoState.id === producto.id)) {
      setPedido(
        pedido.map(productoState => productoState.id === producto.id ? producto : productoState)
      )
      setModal(false)
      toast.success('Guardado Correctamente')
      setProducto({})
      return
    }

    setPedido([
      ...pedido,
      producto
    ])
    setModal(false)
    toast.success('Agregado al Pedido')
    setProducto({})
  }

  const handleEditarCantidad = id => {
    const productoActualizar = pedido.filter(productoState => productoState.id === id)
    setProducto(productoActualizar[0])
    setModal(true)
  }

  const handleEliminarProducto = id => {
    setPedido(pedido.filter(productoState => productoState.id !== id))
  }

  const colocarOrden = async e => {
    e.preventDefault()

    try {
      const { data } = await axios.post('/api/ordenes', {pedido, nombre, total, fecha: Date.now().toString()})
      setCategoriaActual(categorias[0])
      setProducto({})
      setPedido([])
      setNombre('')
      setTotal(0)
      // TODO - Redireccionar luego de Terminar Animacion de Toast
      toast.success('Pedido realizado correctamente')
      setTimeout(() => {
        router.push('/')
      }, 3000);
    } catch (error) {
      console.log( error )
    }
  }

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleCategoriaActual,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        handleAgregarPedido,
        pedido,
        handleEditarCantidad,
        handleEliminarProducto,
        nombre,
        setNombre,
        colocarOrden,
        total
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}
export default QuioscoContext