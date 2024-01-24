import React from 'react'

interface PokeImageProps {
    url: string;
    name: string
}

const PokeImage = ({ url, name }: PokeImageProps) => {
    return (
        <>
            <img width={200} src={url} alt={name} /><br />
        </>
    )
}

export default PokeImage
