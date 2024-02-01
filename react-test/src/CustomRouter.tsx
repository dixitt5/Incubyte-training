import { type ReactElement, useState } from 'react'
import Home from './pages/Home'
import Details from './components/Details'

const CustomRouter = (): ReactElement => {
  const [route, setRoute] = useState<string>('home')
  return (
        <div>
            {route === 'home' ? <Home setRoute={setRoute}/> : <Details id={parseInt(route.split('/')[1])}/>}
        </div>
  )
}

export default CustomRouter
