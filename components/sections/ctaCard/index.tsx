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
        <section className="grid grid-cols-1 md:grid-cols-[1fr_2fr] h-[100vh]">
            {/* left div  */}
            <div className="w-full bg-[#000] h-full relative flex items-center justify-center">
                {/* circle box */}
                <div className="rounded-full w-[600px] h-[600px] shadow-[0_6px_40px_0px] border absolute -right-70 bg-[#D5DEFF]">
                    <div className="container flex items-center justify-center flex-col h-full max-w-md mx-auto text-center space-y-5">

                        {/* tag line */}
                        <div className="">
                            <p className="text-xl md:text-2xl lg:text-3xl   text-[#000]">{data.tagLine}</p>
                        </div>
                        {/* sub tag line */}
                        <div className="">
                            <p className="text-sm md:text-lg  text-[#000]">{data.subTagLine}</p>
                        </div>
                        <a href={`mailto:${data.email}`} className="text-xl md:text-2xl text-[#2112c0] underline hover:opacity-80 transition-opacity">{data.email}</a>
                    </div>
                </div>
            </div>

            {/* right div */}
            <div className="w-full bg-[#fff] h-full flex flex-col   items-end gap-10 p-10 ">


                {/* description */}
                <div className="container relative   max-w-md ">
                    <p className="text-lg">
                        <span className="font-bold">Hi, I'm {data.name} - </span>
                        {data.description}
                    </p>
                </div>
                {/* kpis */}
                <div className="container max-w-md items-center justify-center flex flex-wrap gap-10 p-6">

                    {data.cta.map((kpi, index) => (
                        <div key={index} className="flex flex-col items-center justify-center gap-4">
                            <div className="flex gap-5 items-center justify-center">
                                <span className="font-bold">{kpi.kpi}</span>
                                <Image src={kpi.icon} alt={kpi.title} width={34} height={34} />
                            </div>
                            <span className="block">{kpi.title}</span>
                        </div>
                    ))}
                </div>
                <div className="max-w-md container flex items-center justify-center">
                    
                    <Button color="#6bc533" cta="Lets connect" />
                </div>



            </div>
        </section>
    )
}