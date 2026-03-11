import data from "@/content/rahul.json"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import WorkProcess from "@/components/sections/work_Process"
import CtaCard from "@/components/sections/ctaCard"
import MyServices from "@/components/sections/myServices"
import Testimonial from "@/components/sections/testimonial"

export default function Page() {
  return (
    <main>
      <Hero data={data.hero} />
      <About data={{ about: data.about, experience: data.experience, image:data.image, kpis: data.kpis }}  />
      <WorkProcess data={{topDiscription:data.workProcess.top_Description, steps: data.workProcess.process, bottomDiscription:data.workProcess.bottom_Description}}/>
      <CtaCard data={data.ctaCard} />
      <MyServices data={{description:data.myServices.description, services:data.myServices.services}} />
      <Testimonial data={data.testimonials} />
    </main>
  )
}