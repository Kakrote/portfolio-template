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
        <section className=" bg-white h-[80vh]  justify-center items-center py-50 ">
            <main className="container mx-auto grid grid-cols-3 gap-3">


                {/* right section */}
                <div className=" ">
                    {/* about */}
                    <div>
                        <h2 className="text-xl">About</h2>
                        <p>
                            <span className="font-bold">Hi, I'm{data.about.name} - </span>
                            {data.about.describtion}
                        </p>
                    </div>
                    {/* experience */}
                    <div>
                        <h2 className="text-xl">Experience: {data.experience.time} </h2>
                        <p>{data.experience.describtion}</p>
                        <span>Skills: </span>
                        <ul>
                            {data.experience.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* central image  */}
                <div>

                </div>

                {/* left section with kpis */}
                <div>

                </div>
            </main>
        </section>
    )
}