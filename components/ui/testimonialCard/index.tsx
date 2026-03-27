import Image from "next/image"

type cardDataType={
    name:string 
    title?:string 
    image?:string
    testimonial:string 
}

export default function TestimonialCard({data}:{data:cardDataType}){
    return(
        <main className="p-4 sm:p-6 lg:p-10 shadow-xl bg-white rounded-xl">
            {/* image + name */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 lg:gap-10 p-2 sm:p-3 items-center sm:items-start">
                <Image
                    src={data.image || "/default-profile.png"}
                    alt={data.name}
                    width={100}
                    height={100}
                    className="rounded-full object-cover w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0"
                />
                <div className="flex flex-col gap-1 sm:gap-2 justify-center items-center sm:items-start text-center sm:text-left">
                    <span className="font-bold text-sm sm:text-base lg:text-lg">{data.name}</span>
                    {data.title && <span className="text-xs sm:text-sm lg:text-base text-gray-600">{data.title}</span>}
                </div>
            </div>
            {/* testimonial */}
            <div className="mt-3 sm:mt-4">
                <p className="text-sm sm:text-base lg:text-lg italic leading-relaxed text-center sm:text-left">"{data.testimonial}"</p>
            </div>
        </main>
    )
}