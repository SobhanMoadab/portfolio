import { twMerge } from 'tailwind-merge'

type TagProps = {
    name: string;

}
const Tag = (props: TagProps) => {
    let displayName = ''
    const className = twMerge('py-1 px-3 mb-2 mr-2 text-sm inline-block text-slate-50 bg-black cursor-pointer w-fit', displayName)
    return (
        <a className={className} >{props.name}</a>
    )
}

export default Tag