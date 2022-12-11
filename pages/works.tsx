import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@components/Layout'
import { BsFillGridFill } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { FiLink2 } from 'react-icons/fi'


type Props = {}

export default function Works({}: Props) {
    const works: number[] = [1, 2, 3, 4, 5, 6];


    return (
        <>
            <Head>
                <title>Eonsinde | Home</title>
                <meta name="description" content="Olasinde Jesutise Enoch Web Portfolio, Eonsinde web portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="h-[304px] bg-app-dark flex justify-center items-center">
                <h1 className="font-dm-sans text-[64px]">Works</h1>
            </header>

            <section className="py-20 text-[1.1rem]">
                <div className="app-container">
                    <div className="flex justify-center items-center space-x-2 mb-8">
                        <button className={`flex items-center justify-center space-x-2 py-4 px-5 bg-[#EEEFF0] text-black rounded-2xl`}>
                            <BsFillGridFill />
                            <p>Grid View</p>
                        </button>
                        <button className={`flex items-center justify-center space-x-2 py-4 px-5 bg-[#EEEFF0] text-black rounded-2xl`}>
                            <AiOutlineUnorderedList />
                            <p>List View</p>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-10 ">
                        {works.map(work => (
                        <div key={work} className="single-work flex even:flex-row odd:flex-row-reverse">
                            <div className="basis-4/12">
                            <Image 
                                className="z-10"
                                src="/images/works/work1.jfif"
                                height={400}
                                width={400}
                                alt="avatar"
                            />
                            </div>
                            <div className="basis-8/12 flex flex-col items-center justify-center space-y-4 bg-app-dark">
                            <div className="flex items-center space-x-4">
                                <h3 className="">Instalife Web Application</h3>
                                <FiLink2 className="" />
                            </div>
                            <p className="text-[#6C6C6C]">Non commercial, Community project</p>
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
