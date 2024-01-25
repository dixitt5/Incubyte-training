import { useEffect, type ReactElement, useState } from 'react'
import Navbar from '../../components/Navbar'
import { Outlet, useParams } from 'react-router-dom'

const Layout = (): ReactElement => {
  const { id } = useParams()
  const flag: boolean = id?.length === 0
  const [flagg, setFlagg] = useState(false)

  useEffect(() => {
    setFlagg(flag)
  }, [flag])
  return (
    <div>
      <Navbar flag={flagg}/>
      <Outlet/>
    </div>
  )
}

export default Layout
