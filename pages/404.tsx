import Head from "next/head";
import Layout from "@components/Layout";
import { VscBracketError } from "react-icons/vsc"
import { motion } from "framer-motion"


export default function Custom404() {


    const bannerImgVariant:any = {
        visible: {
          scaleX: [1, 1.2, 1],
          scaleY: [1, 1.2, 1],
          transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
          }
        },
    }

    return <>
        <Head>
            <title>Eonsinde | 404</title>
            <meta name="description" content="404 page at eonsinde" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className='h-[59.3vh] px-2 flex items-center justify-center'>
            <div className="flex flex-col items-center justify-center space-y-4">
                <VscBracketError className="text-[12em]" />
                <motion.h1 
                    variants={bannerImgVariant}
                    animate="visible"
                    className="text-center text-xl md:text-3xl lg:text-4xl font-semibold animate-pulse"
                >
                    {`<h1 404 Error 😢 </H1`}
                </motion.h1>
                <p className="text-neutral-400 text-center">{`<p> You have made a request to a non-existent route </`}</p>
            </div>
        </section>
    </>
}

Custom404.Layout = Layout;