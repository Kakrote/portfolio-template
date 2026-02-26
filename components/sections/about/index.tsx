import Image from "next/image"

type About = {
    name: string
    describtion: string
}

type Experience = {
    time: string
    describtion: string
    skills: string[]
}

type Kpi = {
    title: string
    kpi: string
    icon: string
}

type AboutData = {
    about: About
    experience: Experience
    image: string
    kpis: Kpi[]
}

export default function About({ data }: { data: AboutData }) {
    return (
        <section className=" bg-white h-[90vh] " id="about">
            <main className="container mx-auto  px-6 pt-10 h-full grid grid-cols-3">
                {/* right section  */}
                <div className="flex flex-col gap-10  items-center py-10 max-w-lg  h-fit ">
                    {/* about */}
                    <div className="">
                        <h2 className="text-xl md:text-2xl lg:text-3xl">About</h2>
                        <p><span className="font-bold">Hi, I'm{data.about.name} - </span> {data.about.describtion}</p>
                    </div>

                    {/* experiences */}
                    <div className="w-full">
                        <h2 className="text-xl md:text-2xl lg:text-3xl">Experinces: {data.experience.time}</h2>
                        <p className="max-w-xs">{data.experience.describtion}</p>
                    </div>
                    {/* skills */}
                    <div className="w-full">
                        <h3 className="md:text-xl ">Skills</h3>
                        <ul className="flex p-6 gap-4 flex-wrap">
                            {data.experience.skills.map((skill, i) => (
                                <li key={i} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* central section */}
                <div className="relative   h-full flex  z-30  w-full mx-auto">
                    <Image src={data.image} alt="profile" width={900} height={900} className="rounded-full object-cover w-[800px] h-[770px] absolute right-0 left-0 -top-70" />
                </div>
                {/* left kpis section */}
                <div className="flex  justify-end py-10  ">
                    {/* <h2>Kpis</h2> */}
                    <ul className="flex flex-col gap-10 text-right">
                        {data.kpis.map((kpi, i) => (
                            <li key={i} className="flex gap-4 items-center justify-end">
                                <div>
                                    <h2 className="font-bold text-2xl">{kpi.kpi}</h2>
                                    <h3 className="">{kpi.title}</h3>
                                </div>
                                <Image src={kpi.icon} alt={kpi.title} width={40} height={40} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </section>
    )
}