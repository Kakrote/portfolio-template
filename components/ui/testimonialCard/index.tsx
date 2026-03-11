import Image from "next/image"

type cardDataType={
    name:string 
    title?:string 
    image?:string
    testimonial:string 
}

export default function TestimonialCard({data}:{data:cardDataType}){
    return(
        <main className="p-10 shadow-xl bg-white rounded-xl">
            {/* image + name */}
            <div className="flex gap-10  p-3">
                <Image src={data.image || "/default-profile.png"} alt={data.name} width={100} height={100} className="rounded-full object-cover" />
                <div className="flex flex-col gap-2 justify-center items-center">
                    <span className="font-bold">{data.name}</span>
                    {data.title && <span className="text-sm text-muted-foreground">{data.title}</span>}
                </div>
            </div>
            {/* testimonial */}
            <div className="mt-4">
                <p className="text-lg italic">"{data.testimonial}"</p>
            </div>
        </main>
    )
}