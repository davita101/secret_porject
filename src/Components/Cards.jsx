import cardBackground from '../assets/card-background.png';

const cardData = [
    {
        title: "Big database",
        description: "Database includes all GOA members",
    },
    {
        title: "Special roles",
        description: "Roles for leaders and department members",
    },
    {
        title: "Data visualization",
        description: "Leaders can see all their info in panel",
    },
    {
        title: "Github control",
        description: "Github controllers work directly from this website",
    },
];

const Cards = () => {
    return (
        <section className="h-for-small w-full flex flex-col items-center justify-center">
            <h2 className="text-7xl pb-20 pt-10 font-bold font-MonaSpace max-[1900px]:text-5xl max-[1000px]:text-3xl">About us</h2>
            <div className="grid grid-cols-4 gap-12 h-1/2 w-4/5 max-[1900px]:w-full max-[1900px]:pl-10 max-[1900px]:pr-10 max-[800px]:grid-cols-2 max-[800px]:h1/4">
                {cardData.map((card, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center rounded-xl bg-cover bg-center h-full w-full cursor-pointer shadow-inner transition-all duration-300 hover:scale-110 max-[800px]:pt-2 max-[800px]:pb-2 max-[800px]:h1/4"
                        style={{ backgroundImage: `url(${cardBackground})` }}
                    >
                        <div className="w-24 h-24 rounded-full bg-green-800 mb-4 hover:shadow-white transition-shadow duration-300 max-[1900px]:w-14 max-[1900px]:h-14 max-[800px]:h-10 max-[800px]:w-10"></div>
                        <h2 className="text-4xl font-bold text-white max-[1900px]:text-2xl max-[1200px]:text-base max-[1000px]:text-xl max-[900px]:text-sm">{card.title}</h2>
                        <p className="text-xl text-center max-w-sm text-white max-[1900px]:text-base max-[1200px]:text-sm max-[1000px]:hidden">{card.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Cards;