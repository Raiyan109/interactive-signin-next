import { motion as m } from "framer-motion";
import styles from '@/styles/Home.module.css'
import Link from "next/link";
import Image from 'next/image'
import img from '../public/DrawKit Vector Illustration Black Friday & Online Shopping (4).png'


export default function otp() {
    return (
        <main className={styles.main}>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
                <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                    <section className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
                        {/* <!-- content - start --> */}
                        <div className="xl:w-5/12 flex flex-col justify-between">
                            <div></div>

                            <div className="sm:text-center lg:text-left lg:py-12 xl:py-24">
                                <h1 className="text-black-800 text-4xl sm:text-5xl md:text-6xl font-semibold mb-8 md:mb-12">Enter the verification code to continue</h1>
                                <div className="max-w-md">
                                    <h2 className="text-2xl text-gray-500">We sent to <a href="/" className="text-[#0858F7] font-semibold ">hellouser@heads.design.</a>If you don't see it, check your spam.</h2>
                                </div>

                                {/* Form start */}
                                <div className="mt-2 flex items-center gap-x-2 lg:py-12 xl:py-16 sm:py-8">
                                    <input type="text" data-index="0" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                    <input type="text" data-index="1" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                    <input type="text" data-index="2" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                    <input type="text" data-index="3" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                    <input type="text" data-index="3" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                    <input type="text" data-index="3" placeholder="0" className="w-16 h-16 rounded-lg border focus:border-indigo-600 outline-none text-center text-2xl"

                                    />
                                </div>
                                {/* Form end */}
                                <div className="flex justify-between text-xl text-[#0858F7] font-semibold">
                                    <Link href={'/'}><h3>Back</h3></Link>
                                    <h3>Resend Code</h3>
                                </div>
                            </div>
                        </div>
                        {/* <!-- content - end --> */}

                        {/* <!-- image - start --> */}
                        <div className="xl:w-5/12 h-48 lg:h-auto bg-[#0858F7] overflow-hidden shadow-lg rounded-lg">
                            <article className="max-w-md mx-auto mt-4 rounded-md duration-300 hover:shadow-sm">
                                <a href='/'>
                                    <Image src={img} loading="lazy" alt='card' className="w-full h-full rounded-t-md" />
                                    <div className="flex items-center mt-2 pt-3 ml-4 mr-2">

                                        <div className="ml-3">
                                            <span className="block text-gray-900"></span>
                                            <span className="block text-gray-400 text-sm"></span>
                                        </div>
                                    </div>
                                    <div className="pt-3 ml-4 mr-2 mb-3">
                                        <button className="bg-black text-white active:bg-zinc-600 font-bold uppercase text-md p-1 rounded-md shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                        >
                                            New
                                        </button>
                                        <h3 className="text-4xl text-white font-semibold py-3">
                                            Developer handoff improvements
                                        </h3>
                                        <p className="text-white text-xl mt-1 py-2">You'll now see a highlight around Symbols on the Canvas and in the Inspector.</p>
                                        <div className="flex justify-between items-center py-5">
                                            <p className="text-6xl text-white gap-5 ">....</p>
                                            <h3 className="text-2xl text-white font-semibold">
                                                Share
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                </div>
            </div>
        </main>
    )
}