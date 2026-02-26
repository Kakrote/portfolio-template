type buttonProps={
    color:string 
    cta:string 
    onClick?:()=>null
}

export default function Button ({color="#6bc533", cta="Contact us",onClick }:buttonProps){
    return (
        <div className="p-3 px-5 rounded-lg cursor-pointer" style={{ backgroundColor: color }} onClick={onClick}>
            <span className="text-white font-bold">{cta}</span>
        </div>
    )
}