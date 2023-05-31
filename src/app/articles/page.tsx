import React from 'react'
import Link from 'next/link'
import ArticleCategory from '../../../components/article-category'
import Article from '../../../components/article'

const Articles = () => {
  return (
    <div className='h-full w-full'>
      <section className='mb-6'>
        <h2 className="text-3xl font-bold text-center">Articles</h2>
      </section>
      <section className="w-full">
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
          <section className="flex flex-wrap flex-col justify-center items-center xxs:flex-row w-full">
            <Article />
            <Article />
            <Article />
            <Article />
          </section>
        </div>
      </section>
    </div>
  )
}

export default Articles