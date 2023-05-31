import Image from "next/image"
import Article from "../../components/article"

const Navbar = () => {
    return (
        <>
            <div className="md:w-1/4 hidden md:block">
                Hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad odit, aspernatur at eius dolorum eos sapient
            </div>
            <div className="md:w-3/4 w-full">
                <p className="mx-4 font-roboto italic text-2xl md:text-4xl md:tracking-widest">
                    <span className="inline-block mt-12">
                        I&apos;m a&nbsp;
                    </span>
                    <span className="inline-block p-1 bg-[#31e1a2] border-b-4 underline font-bold">
                        JavaScript back-end&nbsp;
                    </span>
                    <span className="inline-block">
                        engineer with a passion for building robust and scalable applications.
                        My expertise lies in developing server-side logic using
                    </span>
                    <span className="inline-block bg-[#31e1a2] font-bold">
                        &nbsp;Node.js&nbsp;
                    </span>
                    &
                    <span className="inline-block bg-[#31e1a2] font-bold">
                        &nbsp;Typescript&nbsp;
                    </span>
                    <span className="inline-block">
                        and other popular technologies.
                    </span>
                </p>
                <div className="md:w-1/2 m-4 w-4/5 h-0.5 bg-black"></div>
                <div className="">
                    <h3 className=" mb-0 md:w-1/2 m-4 w-4/5 text-xl font-extrabold font-TriplettCGBlack">Recent Articles, letters & posts</h3>
                    <div className="flex inline-block max-w-fit cursor-pointer ">
                        <a className="ml-4 mb-4 text-lg text-violet-600">view all</a>
                        <Image className="mx-2 mb-4 " alt="its just an arrow" height="12" width="12" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPGRlZnM+CiAgICA8c3R5bGU+CiAgICAgIC5jbHMtMSB7CiAgICAgICAgZmlsbDogIzZiMWZmZjsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHBhdGggaWQ9ImljX2Fycm93X2ZvcndhcmRfMjRweCIgY2xhc3M9ImNscy0xIiBkPSJNMTIsNCwxMC41OSw1LjQxLDE2LjE3LDExSDR2MkgxNi4xN2wtNS41OCw1LjU5TDEyLDIwbDgtOFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00IC00KSIvPgo8L3N2Zz4K"></Image>
                    </div>
                </div>
                <section className="flex flex-wrap flex-col justify-center items-center xxs:flex-row">
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </section>
            </div>
        </>

    )
}

export default Navbar