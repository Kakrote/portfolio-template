interface CardProps {
    steps: string
    label: string
}

export default function Card({ steps, label }: CardProps) {
    return (
        <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group overflow-hidden">
            {/* Accent top bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#4F46E5] to-[#7C3AED]" />

            {/* Step number badge */}
            <div className="w-14 h-14 rounded-full bg-linear-to-br from-[#4F46E5] to-[#7C3AED] text-white flex items-center justify-center text-xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#4F46E5]/25">
                {steps}
            </div>

            {/* Label */}
            <h3 className="text-lg font-semibold text-center mt-5 text-gray-800">{label}</h3>
        </div>
    )
}