type CardProps = {
    num?: number,
    text?: string,
    page?: string,
}

export default function Cards({num, text, page}: CardProps){
    return(
        <div>
            <h2>Project {num}</h2>
            <div 
            className="flex flex-col gap-2 w-64 h-64 bg-second-background border border-secondary rounded-xl"
            >
                <img 
                className="object-contain rounded-xl"
                src="https://camo.githubusercontent.com/92b6e875df05c94da07d8e12af120c1ef06fa665f406b41eb18dad1c630e08a3/68747470733a2f2f696d61676573322e696d67626f782e636f6d2f34382f32362f77337945756f4b445f6f2e706e67" alt="" />
                <div className="p-2 space-y-4">
                <p>{text}</p>
                <a
                href={page}
                className="p-1 rounded-xl w-fit border border-[#1C2B3A] bg-[#1C2B3A] hover:border-[#1C2B3A] hover:bg-background"
                >
                    view-project
                </a>
                </div>
            </div>
        </div>
    )
}