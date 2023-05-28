import Image from 'next/image'
import React from 'react'
import Tag from './Tag'

type ArticleProps = {
    height?: number,
    width?: number,
}
const Article = (props: ArticleProps) => {
    return (
        <div className='p-5 border-2 border-gray-950'>
            <div>
                <Image style={{ ["border-radius" as any]: "8px" }} src="/1.jpg"
                    height={props.height ?? 335} width={props.width ?? 335} alt="article card image">
                </Image>
            </div>
            <div className='my-20'>
                <a className='text-xl' href=''>
                    Tests are a waste of time.
                </a>
                <div className='block'>
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
            </div>
        </div>
    )
}

export default Article