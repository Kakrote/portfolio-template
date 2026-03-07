import ServiceCard from "@/components/ui/serviceCard"

type Services={
    name:string 
    description:string
}

type ServiceDataType={
    description:string 
    services:Services[]
}

export default function MyServices({data}:{data:ServiceDataType}){
    return(
        <section className="min-h-[80vh] py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl md:text-4xl lg:text-5xl text-center font-bold">
                    My Services
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-center text-[#383838] mt-4 mb-14">
                    {data.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {data.services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            name={service.name}
                            description={service.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}