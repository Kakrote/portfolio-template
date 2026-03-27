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
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkScreenSize()
        window.addEventListener('resize', checkScreenSize)

        return () => window.removeEventListener('resize', checkScreenSize)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % totalSlides)
        }, AUTO_SLIDE_INTERVAL)
        return () => clearInterval(timer)
    }, [totalSlides])

    const prev = () => setCurrent((c) => (c - 1 + totalSlides) % totalSlides)
    const next = () => setCurrent((c) => (c + 1) % totalSlides)

    const slideWidth = isMobile ? 100 : 50

    return (
        <section className="bg-[#D5DEFF] w-full py-8 sm:py-12 lg:py-16 flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-10">
            <div className="relative w-full p-4 sm:p-6 lg:p-10 space-y-8 sm:space-y-12 lg:space-y-20 overflow-hidden">
                <header className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 items-center sm:items-start">
                    <Image
                        src={"/images/icons/ouate.png"}
                        alt=""
                        width={120}
                        height={200}
                        className=" object-fit lg:object-cover w-20 h-20 sm:w-20 sm:h-24 lg:w-32 lg:h-48 flex-shrink-0"
                    />
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl max-w-full sm:max-w-xl text-center sm:text-left leading-tight">
                        Success stories from the people I work with.
                    </h1>
                </header>
                {/* slides */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * slideWidth}%)` }}
                >
                    {data.map((testimonial, index) => (
                        <div key={index} className="min-w-full md:min-w-[50%] px-2 sm:px-4">
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
            <div className="flex items-center gap-3 sm:gap-4">
                <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="bg-white/70 hover:bg-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow transition text-lg sm:text-xl"
                >
                    ‹
                </button>
                <div className="flex gap-1.5 sm:gap-2">
                    {Array.from({ length: totalSlides }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${i === current ? "bg-indigo-600 scale-125" : "bg-indigo-300"}`}
                        />
                    ))}
                </div>
                <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="bg-white/70 hover:bg-white rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shadow transition text-lg sm:text-xl"
                >
                    ›
                </button>
            </div>
        </section>
    )
}