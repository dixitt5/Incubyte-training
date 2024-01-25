import { type ReactElement } from 'react'
import Navbar from '../../components/Navbar'
import { Outlet, useParams } from 'react-router-dom'

const Layout = (): ReactElement => {
  const params = useParams()
  const flag: boolean = params.id === undefined

  return (
    <div>
      <Navbar flag={flag}/>
      <Outlet/>
    </div>
  )
}

export default Layout
