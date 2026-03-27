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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 text-center bg-[#DDD3D3] min-h-[75vh] sm:min-h-[80vh] md:min-h-[85vh] lg:h-[90vh]"
    >
      <main className="flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
        {/* title */}
        <div className="w-full max-w-sm sm:max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto font-bold leading-tight px-2">{data.title}</h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl mx-auto font-extralight leading-relaxed px-4">{data.subtitle}</h2>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-10 mt-6 sm:mt-8 md:mt-10 lg:mt-12 w-full max-w-xs sm:max-w-none justify-center px-4">
          {data.cta && data.cta_color && (
            <div className="w-full sm:w-auto">
              <Button color={data.cta_color} cta={data.cta} />
            </div>
          )}
          {data.cta2 && data.cta_color2 && (
            <div className="w-full sm:w-auto">
              <Button color={data.cta_color2} cta={data.cta2} />
            </div>
          )}
        </div>
      </main>
    </section>
  )
}