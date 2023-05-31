import React from 'react'
import Link from 'next/link'
import ArticleCategory from '../../../components/article-category'

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
      </section>
    </div>
  )
}

export default Articles