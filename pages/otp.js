import { motion as m } from "framer-motion";
import styles from '@/styles/Home.module.css'
import Link from "next/link";
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
                        <div className="xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg">
                            <img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" className="w-full h-full object-cover object-center" />
                        </div>
                        {/* <!-- image - end --> */}
                    </section>
                </div>
            </div>
        </main>
    )
}