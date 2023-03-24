import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@components/Layout'
import { SiDjango, SiExpress, SiNextdotjs, SiReact } from "react-icons/si"
import { TbBrandReactNative } from "react-icons/tb"


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
                <h1 className="font-dm-sans text-[45px] md:text-[58px] lg:text-[64px]">About</h1>
            </header>

            <section className="py-10 md:py-28 text-[1.1rem]">
                <div className="app-container">
                    <div className="py-28 flex flex-col md:flex-row item-start justify-between space-y-10 md:space-y-0 space-x-0 md:space-x-4">
                        <div className="basis-5/12 flex items-start justify-start md:justify-end">
                            <Image 
                                className="z-0"
                                src="/images/computer_code.jfif"
                                height={400}
                                width={400}
                                alt="avatar"
                            />
                        </div>
                        <div className="basis-6/12 flex flex-col space-y-4 text-[1.1rem]">
                            <h1 className='text-3xl font-bold'>Hello There😎✌️</h1>
                            <p>My name is <span className='capitalize font-semibold text-lg'>Olasinde Jesutise Enoch</span> & I am a <span className='capitalize font-semibold text-lg'>full stack developer</span></p>
                            <div>
                                <p>
                                    As a web developer with five years of experience, I have had the opportunity to work on a wide range of projects and collaborate with diverse teams. 
                                    Over the years, I have gained a deep understanding of web development principles and the latest industry trends, and have honed my skills in coding, testing, and debugging.
                                </p>
                                <br />
                                <p>
                                    In my first year as a web developer, I focused on learning the basics of HTML, CSS, and JavaScript. 
                                    I also gained experience in using various frameworks such as Bootstrap and Materialize to create responsive web designs.
                                </p>
                                <br />
                                <p>
                                    Going forward year, I began to specialize in the JavaScript frameworks such as React and NextJs.
                                    I became proficient in creating single-page applications (SPAs) using this react, and gained expertise in building reusable components, 
                                    integrating with APIs, and managing state with Redux and Recoil. 
                                    I also started to learn server-side programming using Django and Express, and gained experience in building RESTful APIs.
                                </p>
                            </div>
                            <div className='py-5 grid grid-cols-2 sm:grid-cols-3 gap-3 md:flex md:space-x-4'>
                                <div className='bg-neutral-600/30 p-3 flex flex-col justify-center items-center space-y-2 text-center'><SiDjango className='text-green-300 text-3xl'/><span>Django</span></div>
                                <div className='bg-neutral-600/30 p-3 flex flex-col justify-center items-center space-y-2 text-center'><SiReact className='text-blue-400 text-3xl'/><span>React</span></div>
                                <div className='bg-neutral-600/30 p-3 flex flex-col justify-center items-center space-y-2 text-center'><TbBrandReactNative className='text-blue-400 text-3xl'/><span>React Native</span></div>
                                <div className='bg-neutral-600/30 p-3 flex flex-col justify-center items-center space-y-2 text-center'><SiNextdotjs className='text-white text-3xl'/><span>NextJs</span></div>
                                <div className='bg-neutral-600/30 p-3 flex flex-col justify-center items-center space-y-2 text-center'><SiExpress className='text-green-500 text-3xl'/><span>Express</span></div>
                            </div>
                            <p>
                                Throughout the years spent as a web developer, I have learned that the field is constantly evolving, and that there is always something new to learn.
                                I have also come to appreciate the importance of teamwork, communication, and continuous learning, and have developed a 
                                strong work ethic and a passion for building great software.
                            </p>
                            <p>I work in the fields of frontend, backend and mobile development</p>
                            <p>In my spare time I work on computer graphics and develop a 2D game engine with javascript and C++</p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

Works.Layout = Layout
