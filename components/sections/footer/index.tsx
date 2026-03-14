type SocialMedia={
    label:string 
    href:string 
    logo:string 
}

type footerData={
    email:string 
    phone:string
    address:string 
    socialMedia:SocialMedia[]
}


export default function Footer({data}:{data:footerData}){
    return (
        <footer className="bg-[#0f0f0f] w-full py-16 flex flex-col items-center justify-center gap-8 text-white p-10">
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center container  p-10">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p>Email: {data.email}</p>
                    <p>Phone: {data.phone}</p>
                    <p>Address: {data.address}</p>
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">Follow Us</h2>
                    <div className="flex flex-col gap-4">
                        {data.socialMedia.map((social, index) => (
                            <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                <img src={social.logo} alt={social.label} width={24} height={   24} />
                                {social.label}
                            </a>   
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    )
}