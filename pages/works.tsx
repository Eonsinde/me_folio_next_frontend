import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@components/Layout'
import Circle from '@components/shapes/Circle'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FiLink2 } from 'react-icons/fi'


type Props = {}

export default function Works({}: Props) {
    const [viewState, setViewState] = useState<string>('list');
    const works: number[] = [1, 2, 3, 4, 5, 6];


    return (
        <>
            <Head>
                <title>Eonsinde | Works</title>
                <meta name="description" content="Olasinde Jesutise Enoch Web Portfolio, Eonsinde web portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="h-[304px] bg-app-dark flex justify-center items-center before:absolute before:h-[100px] before:-bottom-6 before:md:-bottom-11 before:w-full before:bg-app-dark before:-skew-y-3 relative">
                <h1 className="font-dm-sans text-[45px] md:text-[58px] lg:text-[64px]">Works</h1>
            </header>

            <section className="py-28 text-[1.1rem]">
                <div className="app-container">
                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <button 
                            className={`flex items-center justify-center space-x-2 py-3 px-3 md:py-4 md:px-5 ${viewState === 'grid' ? 'bg-[#EEEFF0] text-black' : 'text-white'} rounded-2xl`}
                            onClick={() => setViewState('grid')}
                        >
                            <BsFillGridFill />
                            <p>Grid View</p>
                        </button>
                        <button 
                            className={`flex items-center justify-center space-x-2 py-3 px-3 md:py-4 md:px-5 ${viewState === 'list' ? 'bg-[#EEEFF0] text-black' : 'text-white'} rounded-2xl`}
                            onClick={() => setViewState('list')}
                        >
                            <AiOutlineUnorderedList />
                            <p>List View</p>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-10 ">
                        {works.map(work => (
                            <div key={work} className="single-work flex flex-col md:even:flex-row md:odd:flex-row-reverse">
                                <div className="md:basis-4/12 h-[250px] md:h-auto relative">
                                    <Image 
                                        className="z-10 object-cover"
                                        src="/images/works/work1.jfif"
                                        fill
                                        sizes="(max-width: 768px) w-full,
                                                (max-width: 1200px) w-full,
                                                w-full h-full"
                                        alt="avatar"
                                    />
                                </div>
                                <div className="basis-full md:basis-8/12 flex flex-col items-center justify-center space-y-4 bg-app-dark relative overflow-hidden py-8 md:py-16 px-5">
                                    <div className="z-10">
                                        <div className="">
                                            <Link href="/" className="flex items-center space-x-4">
                                                <h3 className="">Instalife Web Application</h3>
                                                <FiLink2 className="" />
                                            </Link>
                                        </div>
                                    </div>
                                    <p className="text-[#6C6C6C] text-center md:text-left">Non commercial, Community project</p>
                                    <Circle className='absolute' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

Works.Layout = Layout
