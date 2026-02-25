type HeroData = {
  title: string
  subtitle: string
  cta?: string
}

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="py-20 text-center">
      <h1 className="text-5xl font-bold">{data.title}</h1>
      <p className="mt-4 text-gray-500">{data.subtitle}</p>

      {data.cta && (
        <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg">
          {data.cta}
        </button>
      )}
    </section>
  )
}