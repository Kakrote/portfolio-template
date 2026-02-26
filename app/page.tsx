import data from "@/content/rahul.json"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"

export default function Page() {
  return (
    <main>
      <Hero data={data.hero} />
      <About data={{ about: data.about, experience: data.experience, image:data.image, kpis: data.kpis }}  />
    </main>
  )
}