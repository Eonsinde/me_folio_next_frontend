import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import useSWR from 'swr'
import Layout from '@components/Layout'
import { customSanityParamFetcher } from 'backend-requests'
import { urlFor } from 'sanity-connect'
import { TfiLink } from "react-icons/tfi"


type Props = {}

const WorkLoader = () => {
    const nums:number[] = [1,2,3];

    return (
        <section className='py-10 md:py-16'>
            <div className="app-container">
                <div className='flex flex-row flex-wrap md:flex-nowrap items-center md:justify-between space-y-6 md:space-y-0'>
                    <div className="basis-full md:basis-5/12 bg-neutral-500/25 h-52 md:h-60 lg:h-64 rounded-md transition-all ease-in animate-pulse">
                    </div>
                    <div className='basis-full md:basis-6/12 flex flex-col justify-center space-y-4'>
                        <div className="bg-neutral-500/25 h-9 transition-all ease-in animate-pulse"></div>
                        <div className="flex flex-col space-y-4">
                            <div className="bg-neutral-500/25 h-6 transition-all ease-in animate-pulse"></div>
                            <div className="bg-neutral-500/25 h-6 transition-all ease-in animate-pulse"></div>
                            <div className="bg-neutral-500/25 h-6 transition-all ease-in animate-pulse"></div>
                        </div>
                    </div>
                </div>
                <div className='py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'>
                    {nums.map(num => (
                        <div 
                            key={num} 
                            className="bg-neutral-500/25 mx-auto h-52 md:h-60 lg:h-64 w-full rounded-md transition-all ease-in animate-pulse"
                        >
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const WorkDetail = (props: Props) => {
    const router:any = useRouter()
    const { slug } = router.query
    const { data, error, isValidating } = useSWR([
       `
       *[_type == "work" && slug.current == $slug]{
            ...,
        }
       `,
        slug
    ], customSanityParamFetcher);

    console.log("data: " + data);

    if (isValidating)
        return <WorkLoader />
    return (
        <section className='py-10 md:py-16'>
            <div className="app-container">
                <header className='flex flex-row flex-wrap md:flex-nowrap items-center md:justify-between space-y-6 md:space-y-0'>
                    <div className="basis-full md:basis-5/12">
                        {(data[0]?.poster !== undefined)
                        ?
                        <Image 
                            className="z-0 h-64 w-full object-contain"
                            src={`${(data !== undefined) ? (data[0]?.poster !== undefined) ? urlFor(data[0]?.poster).url() : '' : '/images/computer_code.jfif'}`}
                            height={400}
                            width={400}
                            alt="project brand"
                        />
                        :
                        <div className="bg-neutral-500/25 h-52 md:h-60 lg:h-64 w-full rounded-md flex items-center justify-center">
                            <p className='text-neutral-400 text-2xl md:text-4xl font-semibold'>Project</p>
                        </div>
                        }
                    </div>
                    <div className="basis-full md:basis-6/12 flex flex-col space-y-4 text-[1.1rem]">
                        <h1 className='text-2xl md:text-4xl font-bold capitalize'>
                            <span className=''>{data[0].title}</span>
                        </h1>
                        <Link 
                            href={`${data[0].website_url}`} 
                            className='flex items-center space-x-2' 
                            target='__blank'
                        >
                            <>
                                <TfiLink />
                                <span>{data[0].website_link}</span>
                            </>
                        </Link>
                        <p>{data[0].summary}</p>
                        <p className='leading-6 text-neutral-400'>
                            {(data !== undefined) && data[0].briefing[0].children.map((child:any, index:number) => (
                                <span 
                                    key={index}
                                    className={`
                                        ${child.marks.find((currentValue:any) => (currentValue === "strong")) ? 'font-bold' : ''}
                                    `}
                                >
                                    {child.text}
                                </span>
                            ))}
                        </p>
                    </div>
                </header>
                <main className='py-10'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4'>
                        {(data !== undefined) && data[0].related_images.map((rImage: any, index:number) => (
                            <div key={index} className='mx-auto md:mx-0 border border-neutral-600/30'>
                                <Image 
                                    className="z-0"
                                    src={`${(data !== undefined) ? urlFor(rImage.poster).url() : '/images/computer_code.jfif'}`}
                                    height={400}
                                    width={400}
                                    alt="avatar"
                                />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </section>
    )
}

WorkDetail.Layout = Layout
export default WorkDetail