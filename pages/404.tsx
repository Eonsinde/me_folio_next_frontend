import Layout from "@components/Layout";
import { VscBracketError } from "react-icons/vsc"
import { motion } from "framer-motion"


export default function Custom404() {
    return <section className='h-[59.3vh] flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center space-y-4">
            <VscBracketError className="text-[12em]" />
            <h1 className="text-4xl font-semibold">{`<h1 404 Error 😢 </H1`}</h1>
            <p>{`<p> You have made a request to a non-existent route </`}</p>
        </div>
    </section>
}

Custom404.Layout = Layout;