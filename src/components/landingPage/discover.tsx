import Image from "next/image"

export default function Discover() {
    const items = [
        {
            name: "Warlot Docs",
            desc: "Markdown editing and smart file patching"
        },
        {
            name: "Warlot Grid",
            desc: "Sheet-style logic with encryption"
        },
        {
            name: "Warlot Ask",
            desc: "Collect and store responses securely"
        }
    ]
    return (
        <section className="py-10 px-8 md:px-20 text-black bg-[#F8F8F8]">
            <h2 className="text-2xl min-[440px]:text-3xl lg:text-4xl font-medium">Discover What's Coming Next</h2>
            <div className="flex flex-col sm:flex-row justify-between gap-y-6 items-center mt-[40]">
                {items.map((item, index) => (
                    <div className="w-full sm:w-3/10 p-3 bg-[#FFFFFF] rounded-[10]" key={item.name}>
                        <div className="w-full h-[180px] rounded-[10] overflow-hidden bg-[var(--grey-600)]">
                            <Image src={`/discover-${index+1}.jpg`} alt={item.name} width={100} height={100} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full">
                            <h3 className="mt-[15] text-base">{item.name}</h3>
                            <span className="text-sm mt-[14] text-[var(--grey-600)]">{item.desc}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}