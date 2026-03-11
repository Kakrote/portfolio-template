"use client"

import TestimonialCard from "@/components/ui/testimonialCard"
import Image from "next/image"
import { useEffect, useState } from "react"

type testimonialDataType = {
    name: string
    title?: string
    desciption: string
    image?: string
}

const AUTO_SLIDE_INTERVAL = 6000

export default function Testimonial({ data }: { data: testimonialDataType[] }) {
    const totalSlides = Math.max(1, data.length - 1)
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides)
        }, AUTO_SLIDE_INTERVAL)
        return () => clearInterval(timer)
    }, [totalSlides])

    const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides)
    const next = () => setCurrent((c) => (c + 1) % totalSlides)

    return (
        <section className="bg-[#D5DEFF] w-full py-16 flex flex-col items-center justify-center gap-8 p-10">
            <div className="relative w-full  p-10 space-y-20 overflow-hidden">
                <header className="flex gap-10">
                    <Image
                        src={"/images/icons/ouate.png"}
                        alt=""
                        width={130}
                        height={200}
                        className="object-cover"
                    />
                    <h1 className=" text-3xl md:text-5xl max-w-xl ">Success stories from the people I work with.</h1>
                </header>
                {/* slides */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 50}%)` }}
                >
                    {data.map((testimonial, index) => (
                        <div key={index} className="min-w-[50%] px-4">
                            <TestimonialCard
                                data={{
                                    name: testimonial.name,
                                    title: testimonial.title,
                                    testimonial: testimonial.desciption,
                                    image: testimonial.image,
                                }}
                            />
                        </div>
                    ))}
                </div>

            </div>

            {/* navigation buttons + dot indicators */}
            <div className="flex items-center gap-4">
                <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="bg-white/70 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition text-xl"
                >
                    ‹
                </button>
                <div className="flex gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-indigo-600 scale-125" : "bg-indigo-300"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="bg-white/70 hover:bg-white rounded-full w-9 h-9 flex items-center justify-center shadow transition text-xl"
                >
                    ›
                </button>
            </div>
        </section>
    )
}