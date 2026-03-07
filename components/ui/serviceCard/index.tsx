interface ServiceCardProps {
    name: string
    description: string
    index: number
}

const accentColors = [
    "from-[#4F46E5] to-[#7C3AED]",
    "from-[#0EA5E9] to-[#6366F1]",
    "from-[#F59E0B] to-[#EF4444]",
    "from-[#10B981] to-[#3B82F6]",
]

export default function ServiceCard({ name, description, index }: ServiceCardProps) {
    const gradient = accentColors[index % accentColors.length]

    return (
        <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full">
            {/* Accent side bar */}
            <div className={`absolute top-0 left-0 w-1.5 h-full bg-linear-to-b ${gradient} rounded-l-2xl`} />

            {/* Index badge */}
            <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${gradient} text-white flex items-center justify-center text-lg font-bold mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-lg`}>
                {String(index + 1).padStart(2, "0")}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#4F46E5] transition-colors duration-300">
                {name}
            </h3>

            {/* Description */}
            <p className="text-gray-500 leading-relaxed text-sm flex-1">
                {description}
            </p>

            {/* Arrow indicator */}
            {/* <div className="mt-6 flex items-center gap-2 text-[#4F46E5] opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div> */}
        </div>
    )
}
