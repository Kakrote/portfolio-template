import Button from "@/components/ui/buttons"
import Image from "next/image"

type kpiData = {
    kpi: string
    icon?: string
    title: string
}

type ctaCardData = {
    name: string
    description: string
    email: string
    tagLine: string
    subTagLine: string
    cta: kpiData[]
}

export default function CtaCard({ data }: { data: ctaCardData }) {
    return (
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] min-h-[60vh] sm:min-h-[70vh]">
            {/* left div  */}
            <div className="w-full bg-black min-h-[40vh] lg:h-full relative flex items-center justify-center py-12 lg:py-0">
                {/* circle box */}
                <div className="
                    w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]
                    rounded-full shadow-[0_6px_40px_0px] bg-[#D5DEFF]
                    relative lg:absolute lg:-right-20 xl:-right-32
                    flex items-center justify-center
                ">
                    <div className="flex items-center justify-center flex-col h-full w-full max-w-xs sm:max-w-sm lg:max-w-md mx-auto text-center space-y-3 sm:space-y-4 lg:space-y-5 px-6 lg:px-8">

                        {/* tag line */}
                        <div className="">
                            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-black font-medium">{data.tagLine}</p>
                        </div>
                        {/* sub tag line */}
                        <div className="">
                            <p className="text-sm sm:text-base md:text-lg text-black leading-relaxed">{data.subTagLine}</p>
                        </div>
                        <a href={`mailto:${data.email}`} className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#2112c0] underline hover:opacity-80 transition-opacity break-all">{data.email}</a>
                    </div>
                </div>
            </div>

            {/* right div */}
            <div className="w-full bg-white flex flex-col items-center lg:items-end gap-4 sm:gap-6 lg:gap-8 p-6 sm:p-8 lg:p-10 lg:px-20 xl:px-40">


                {/* description */}
                <div className="w-full max-w-full sm:max-w-lg lg:max-w-md text-center lg:text-left">
                    <p className="text-base sm:text-lg leading-relaxed">
                        <span className="font-bold">Hi, I'm {data.name} - </span>
                        {data.description}
                    </p>
                </div>
                {/* kpis */}
                <div className="w-full max-w-full sm:max-w-lg lg:max-w-md flex flex-wrap gap-6 sm:gap-8 lg:gap-10 justify-center lg:justify-start p-4 sm:p-6">

                    {data.cta.map((kpi, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-2 sm:gap-3 lg:gap-4 min-w-[120px] sm:min-w-[140px]">
                            <div className="flex gap-3 sm:gap-4 lg:gap-5 items-center justify-center">
                                <span className="font-bold text-sm sm:text-base lg:text-lg">{kpi.kpi}</span>
                                {kpi.icon && <Image src={kpi.icon} alt={kpi.title} width={34} height={34} className="w-6 h-6 sm:w-8 sm:h-8 lg:w-8 lg:h-8" />}
                            </div>
                            <span className="block text-xs sm:text-sm lg:text-base text-center">{kpi.title}</span>
                        </div>
                    ))}
                </div>
                <div className="w-full max-w-full sm:max-w-lg lg:max-w-md flex items-center justify-center lg:justify-start">
                    <Button color="#6bc533" cta="Lets connect" />
                </div>



            </div>
        </section>
    )
}