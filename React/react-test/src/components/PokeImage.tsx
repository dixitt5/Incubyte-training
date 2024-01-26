import { type ReactElement } from 'react'

interface PokeImageProps {
  id: number
  name: string
}

const PokeImage = ({ id, name }: PokeImageProps): ReactElement => {
  // const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png` // This is for normal images
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif` // This is for gif
  return (
    <>
      <img width={200} src={url} alt={name} />
    </>
  )
}

export default PokeImage
