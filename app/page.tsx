import Hero from "@/components/sections/hero"
import data from "@/content/rahul.json"

export default function Page() {
  return (
    <main>
      <Hero data={data.hero} />
    </main>
  )
}