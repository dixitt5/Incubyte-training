import { type ReactElement } from 'react'
import { Header } from '../components/Header'
import { Outlet, useParams } from 'react-router-dom'

const HomeLayout = (): ReactElement => {
  const params = useParams()
  const flag: boolean = params.id === undefined

  return (
        <div>
            <Header flag={flag}/>
            <Outlet/>
        </div>
  )
}

export default HomeLayout