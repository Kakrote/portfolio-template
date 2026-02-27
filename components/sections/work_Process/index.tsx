import Card from "@/components/ui/card"

type Steps = {
    step: string
    label: string
}

type WorkProcessProps = {
    topDiscription: string
    bottomDiscription: string
    steps: Steps[]
}

/* SVG curved connector that snakes from one card to the next (desktop) */
function CurvedConnector({ direction }: { direction: "down" | "up" }) {
    // "down" = curve from top-right to bottom-left  (even → odd)
    // "up"   = curve from bottom-right to top-left   (odd → even)
    const d =
        direction === "down"
            ? "M 0 20 C 30 20, 30 80, 60 80"   // curves downward
            : "M 0 80 C 30 80, 30 20, 60 20"    // curves upward

    return (
        <div className="hidden lg:flex items-center justify-center w-16 shrink-0">
            <svg
                viewBox="0 0 60 100"
                fill="none"
                className="w-full h-24"
                preserveAspectRatio="none"
            >
                {/* Glow / shadow path */}
                <path
                    d={d}
                    stroke="#4F46E5"
                    strokeOpacity={0.15}
                    strokeWidth={6}
                    strokeLinecap="round"
                    fill="none"
                />
                {/* Main dashed path */}
                <path
                    d={d}
                    stroke="url(#connectorGradient)"
                    strokeWidth={2.5}
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                    fill="none"
                    className="animate-dash"
                />
                {/* Arrowhead dot at end */}
                <circle
                    cx={direction === "down" ? 60 : 60}
                    cy={direction === "down" ? 80 : 20}
                    r={4}
                    fill="#7C3AED"
                />
                <defs>
                    <linearGradient id="connectorGradient" x1="0" y1="0" x2="60" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F46E5" />
                        <stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

/* Vertical curved connector for mobile */
function VerticalConnector() {
    return (
        <div className="flex lg:hidden flex-col items-center h-14 my-1">
            <svg viewBox="0 0 20 50" className="w-5 h-full" fill="none">
                <path
                    d="M 10 0 C 10 15, 10 35, 10 50"
                    stroke="url(#vGrad)"
                    strokeWidth={2.5}
                    strokeDasharray="5 4"
                    strokeLinecap="round"
                    fill="none"
                />
                <circle cx={10} cy={48} r={3} fill="#7C3AED" />
                <defs>
                    <linearGradient id="vGrad" x1="10" y1="0" x2="10" y2="50" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4F46E5" />
                        <stop offset="1" stopColor="#7C3AED" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default function WorkProcess({ data }: { data: WorkProcessProps }) {
    return (
        <section className="bg-linear-to-br from-[#D5DEFF] to-[#E8E0FF] w-full py-20 overflow-hidden">
            <main className="container mx-auto px-4 space-y-14">
                {/* Animated dash keyframe (inline style) */}
                <style>{`
                    @keyframes dashMove {
                        to { stroke-dashoffset: -20; }
                    }
                    .animate-dash {
                        animation: dashMove 1.2s linear infinite;
                    }
                `}</style>

                {/* Section header */}
                <div className="text-center space-y-3">
                    <p className="text-sm uppercase tracking-[0.2em] text-[#4F46E5] font-semibold">Workflow</p>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">My Work Process</h2>
                </div>

                {/* Top description */}
                <div className="max-w-2xl mx-auto">
                    <p className="text-center text-[#555] text-lg leading-relaxed">{data.topDiscription}</p>
                </div>

                {/* ───── Desktop layout: horizontal zigzag ───── */}
                <div className="hidden lg:flex items-center justify-center py-10">
                    {data.steps.map((step, index) => (
                        <div key={index} className="flex items-center">
                            {/* Card with alternating vertical offset */}
                            <div
                                className={`w-60 transition-transform duration-500 ${
                                    index % 2 === 0 ? "translate-y-12" : "-translate-y-12"
                                }`}
                            >
                                <Card steps={step.step} label={step.label} />
                            </div>

                            {/* Curved SVG connector */}
                            {index < data.steps.length - 1 && (
                                <CurvedConnector direction={index % 2 === 0 ? "down" : "up"} />
                            )}
                        </div>
                    ))}
                </div>

                {/* ───── Mobile / Tablet layout: vertical stack ───── */}
                <div className="flex lg:hidden flex-col items-center py-6">
                    {data.steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center w-full">
                            <div className="w-full max-w-sm">
                                <Card steps={step.step} label={step.label} />
                            </div>
                            {index < data.steps.length - 1 && <VerticalConnector />}
                        </div>
                    ))}
                </div>

                {/* Bottom description */}
                {data.bottomDiscription && (
                    <div className="max-w-2xl mx-auto">
                        <p className="text-center text-[#555] text-lg leading-relaxed">{data.bottomDiscription}</p>
                    </div>
                )}
            </main>
        </section>
    )
}