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
        <section className=" bg-white h-[80vh]">
            <main className="container mx-auto border h-full grid grid-cols-3">
                {/* right section  */}
                <div>
                    {/* about */}
                    <div>
                        <h2>About</h2>
                        <p><span className="font-bold">Hi, I'm{data.about.name} - </span> {data.about.describtion}</p>
                    </div>

                    {/* experiences */}
                    <div className="max-w-xs">
                        <h2>Experinces: {data.experience.time}</h2>
                        <p>{data.experience.describtion}</p>
                    </div>
                </div>
                {/* central section */}
                <div>

                </div>
                {/* left kpis section */}
                <div>

                </div>
            </main>
        </section>
    )
}