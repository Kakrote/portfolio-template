type buttonProps={
    color:string 
    cta:string 
    onClick?:()=>null
}

export default function Button ({color="#6bc533", cta="Contact us",onClick }:buttonProps){
    return (
        <div className="relative overflow-hidden p-3 px-5 rounded-lg cursor-pointer group" style={{ backgroundColor: color }} onClick={onClick}>
            <span className="relative z-10 text-white font-bold">{cta}</span>
            <span className="absolute inset-0 bg-[#496be6] -translate-x-full translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 rounded-lg transition-transform duration-800 ease-in-out"></span>
        </div>
    )
}