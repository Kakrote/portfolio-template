import data from "@/content/rahul.json"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import WorkProcess from "@/components/sections/work_Process"

export default function Page() {
  return (
    <main>
      <Hero data={data.hero} />
      <About data={{ about: data.about, experience: data.experience, image:data.image, kpis: data.kpis }}  />
      <WorkProcess data={{topDiscription:data.workProcess.top_Description, steps: data.workProcess.process, bottomDiscription:data.workProcess.bottom_Description}}/>
    </main>
  )
}