import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@components/Layout'
import { FiLink2 } from 'react-icons/fi'
import styles from '../styles/Home.module.css'
import Circle from '@components/shapes/Circle'



export default function Home() {
  const works: number[] = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Head>
        <title>Eonsinde | Home</title>
        <meta name="description" content="Olasinde Jesutise Enoch Web Portfolio, Eonsinde web portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       {/* banner section */}
       <header className="py-28">
        <div className="app-container">
          <div className="flex flex-col space-y-24">
            <div className="flex items-center justify-between">
              {/* header text and captions */}
              <div className="basis-full md:basis-6/12 flex flex-col items-center md:items-start space-y-8 text-[1.1rem]">
                <p className='font-dm-sans text-[1.25rem] italic tracking-wide'>Hello! I’m Olasinde Jesutise Enoch</p>
                <h1 className="font-dm-sans font-bold text-center md:text-left text-[45px] md:text-[58px] lg:text-[64px] before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-app-dark relative">
                  <span className="relative text-white">Full stack Developer</span>
                </h1>
                <div className="flex items-center justify-start space-x-4 text-[1.25rem]">
                  <Link href="/" className='block underline'>Show projects</Link>
                  <Link href="/" className='block underline'>Resume</Link>
                </div>
              </div>
              <div className="relative hidden md:flex items-center justify-end">
                <div className="bg-app-dark rounded-full">
                  <Image 
                    className="z-10"
                    src="/images/avatar.png"
                    height={315}
                    width={315}
                    alt="avatar"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col items-center space-y-4">
                <p className="-rotate-180 text-[1.1rem]" style={{ writingMode: "vertical-rl" }}>scroll down</p>
                <hr className="h-[80px] w-[0.2rem] border-0 bg-[#9CA3AF] before:block before:absolute before:h-[30px] before:w-[0.2rem] before:bg-app-dark relative" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* about section */}
      <section className="py-32 bg-app-dark before:absolute before:-top-6 before:md:-top-11 before:h-[100px] before:w-full before:bg-app-dark before:-skew-y-3 relative">
        <div className="app-container">
          <div className="flex flex-col md:flex-row item-start justify-between space-y-10 md:space-y-0">
            {/* <h5 className=" text-xl">About Me</h5>  */}
            <h4 className="basis-2/12 font-bold text-xl before:block before:absolute before:top-3 before:-left-2 before:skew-y-3 before:h-[30px] before:w-28 before:bg-[#181818] relative">
              <span className="relative text-white">About Me</span>
            </h4>               
            <div className="flex flex-col space-y-4 basis-5/12 text-[1.1rem]">
              <p>Multi-disciplinary full stack developer. I transform problems into scalable solutions, using design and technology</p>
              <p>I work in the fields of frontend, backend and mobile development</p>
              <p>In my spare time I work on computer graphics and develop a 2D game engine with javascript and C++</p>
            </div>
            <div className="basis-5/12 flex items-center justify-start md:justify-end">
              <Image 
                className="z-10"
                src="/images/computer_code.jfif"
                height={400}
                width={400}
                alt="avatar"
              />
            </div>
          </div>
        </div>
      </section>

      {/* works briefinf section */}
      <section className="py-32">
        <div className="app-container">
          <div className="text-[1.1rem]">
            <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
              <h4 className="basis-2/12 font-bold text-xl before:block before:absolute before:top-3 before:-left-2 before:skew-y-3 before:h-[30px] before:w-20 before:bg-app-dark relative">
                <span className="relative text-white">Works</span>
              </h4>      
              {/* render works */}
              <div className="basis-10/12 flex flex-col space-y-10 ">
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
            <div className="text-right mt-8">
              <Link href="" className="underline">View all projects</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Home.Layout = Layout