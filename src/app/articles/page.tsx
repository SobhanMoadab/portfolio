import React from 'react'
import ArticleCategory from '../../../components/article-category'
import Article from '../../../components/Article'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin']
})

const Articles = () => {
  return (
    <>
      <div className={`h-full w-full md:flex ${roboto.className}`}>
        <section className='mb-6 md:w-3/ md:left'>
          <h2 className="text-2xl font-bold text-left mb-6 font-extrabold tracking-wide">Articles</h2>
          <div className="md:w-2/4 hidden md:block font-serif">
            Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit, aspernatur at eius dolorum eos sapient
          </div>
        </section>
        <section className="w-full md:1/4">
          <div className='flex flex-wrap w-fit mb-4 inline-flex'>
            <ArticleCategory name='Client-Side Architecture' />
            <ArticleCategory name='Server-Side' />
            <ArticleCategory name='GraphQL' />
            <ArticleCategory name='Enterprise Node + TypeScript' />
            <ArticleCategory name='Design' />
            <ArticleCategory name='Domain-Driven Design' />
          </div>
          <div>
            <input className='border-4 border-gray-300 p-2 w-full mb-2' type="text" placeholder='Type to filter posts...'></input>
            <section className="flex h-full flex-wrap flex-col xxs:flex-row justify-between md:pt-5">
              <Article />
              <Article />
              <Article />
              <Article />
            </section>
          </div>
        </section>
      </div>
    </>
  )
}

export default Articles