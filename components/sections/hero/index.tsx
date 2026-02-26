import Button from "@/components/ui/buttons"
type HeroData = {
  title: string
  subtitle: string
  cta?: string
  cta2?: string
  cta_color?: string
  cta_color2?: string
}

export default function Hero({ data }: { data: HeroData }) {

  return (
    <section className="py-20 text-center bg-[#DDD3D3] h-[80vh]"
    >
      <main className="flex flex-col justify-center items-center h-full">
        {/* title */}
        <div className="max-w-5xl mx-auto space-y-10">
          <h1 className="text-xl md:text-5xl max-w-4xl mx-auto font-bold">{data.title}</h1>
          <h2 className="text-lg max-w-xl mx-auto font-extralight">{data.subtitle}</h2>
        </div>


        <div className="flex  min-w-xl p-10 space-x-10 justify-center ">
          {data.cta && data.cta_color && (
            <div>
              <Button color={data.cta_color} cta={data.cta} />
            </div>
          )}
          {data.cta2 && data.cta_color2 && (
            <div>
              <Button color={data.cta_color2} cta={data.cta2} />
            </div>
          )}
        </div>
      </main>
    </section>
  )
}