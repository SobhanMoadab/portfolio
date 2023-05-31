import Image from 'next/image'
import React from 'react'
import Tag from './Tag'

type ArticleProps = {
    height?: number,
    width?: number,
}
const Article = (props: ArticleProps) => {
    return (
        <div className='p-1 border-gray-950  xxs:w-1/2'>
            <Image className='w-full rounded-md' src="/1.jpg"
                height={props.height ?? 335} width={props.width ?? 335} alt="article card image">
            </Image>
            <div className=''>
                <a className='text-violet-600 mt-2 mb-3 block' href=''>
                    Tests are a waste of time.
                </a>
                <a className='text-xl' href=''>
                    Tests are a waste of time.
                </a>
                <div className='flex flex-wrap mt-2'>
                    <Tag name='software essentialism'/>
                    <Tag name='negative value'/>
                    <Tag name='business'/>
                    <Tag name='three ways'/>
                    <Tag name='architecture'/>
                    <Tag name='rdd'/>
                </div>
            </div>
        </div>
    )
}

export default Article