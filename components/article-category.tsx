import Link from 'next/link'
import React from 'react'

type ArticleCategoryProps = {
    name: string
}
const ArticleCategory = (props: ArticleCategoryProps) => {
    return (
        <div>
            <Link className=" bg-green-1 rounded-md text-sm font-medium text-green-2
             cursor-pointer py-2 px-3 inline-block whitespace-nowrap mb-2 mr-2"
                href='/articles/categories/tag-name'>{props.name}</Link>
        </div>

    )
}

export default ArticleCategory