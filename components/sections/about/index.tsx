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
        <section className="bg-white min-h-[60vh] sm:min-h-[70vh] lg:h-[80vh] py-8 sm:py-12 lg:py-0" id="about">
            <main className="container mx-auto px-4 sm:px-6 lg:px-6 pt-6 sm:pt-8 lg:pt-10 h-full flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-0">
                {/* Left section - About, Experience, Skills */}
                <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 items-start lg:items-center py-4 lg:py-10 max-w-full lg:max-w-lg h-fit order-2 lg:order-1">
                    {/* about */}
                    <div className="w-full">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">About</h2>
                        <p className="text-sm sm:text-base leading-relaxed"><span className="font-bold">Hi, I'm {data.about.name} - </span> {data.about.describtion}</p>
                    </div>

                    {/* experiences */}
                    <div className="w-full">
                        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-2 sm:mb-3">Experience: {data.experience.time}</h2>
                        <p className="text-sm sm:text-base leading-relaxed max-w-full sm:max-w-md lg:max-w-xs">{data.experience.describtion}</p>
                    </div>
                    {/* skills */}
                    <div className="w-full">
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-3">Skills</h3>
                        <ul className="flex gap-2 sm:gap-3 lg:gap-4 flex-wrap">
                            {data.experience.skills.map((skill, i) => (
                                <li key={i} className="bg-gray-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Central section - Profile Image */}
                <div className="relative h-93 sm:h-64 md:h-80 lg:h-full flex justify-center items-center lg:items-start z-30 w-full mx-auto order-1 lg:order-2 ">
                    <Image
                        src={data.image}
                        alt="profile"
                        width={900}
                        height={900}
                        className="rounded-full object-cover w-92 h-92 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] lg:absolute lg:right-0 lg:left-0 lg:-top-20"
                    />
                </div>
                {/* Right section - KPIs */}
                <div className="flex justify-center lg:justify-end py-4 lg:py-10 order-3">
                    <ul className="flex flex-row gap-6 sm:gap-8 lg:flex-col lg:gap-10 text-center lg:text-right">
                        {data.kpis.map((kpi, i) => (
                            <li key={i} className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center lg:justify-end">
                                <div className="order-2 lg:order-1">
                                    <h2 className="font-bold text-lg sm:text-xl lg:text-2xl">{kpi.kpi}</h2>
                                    <h3 className="text-xs sm:text-sm lg:text-base">{kpi.title}</h3>
                                </div>
                                <Image
                                    src={kpi.icon}
                                    alt={kpi.title}
                                    width={40}
                                    height={40}
                                    className="w-8 h-8 sm:w-10 sm:h-10 lg:w-10 lg:h-10 order-1 lg:order-2"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </section>
    )
}