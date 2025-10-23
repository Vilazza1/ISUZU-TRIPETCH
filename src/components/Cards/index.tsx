import Image from "next/image";

export default function Cards() {
  // Cada objeto tem título e imagem
  const cards = [
    { title: "Mission", src: "/images/Mission.png" },
    { title: "People", src: "/images/People.png" },
    { title: "Career", src: "/images/Career.png" },
    { title: "Contact", src: "/images/Contact.png" },
  ];

  return (
    <div className="flex items-center justify-center mt-20 gap-10">
      <ul className="flex gap-10">
        {cards.map((card) => (
          <li
            key={card.title}
            className="relative w-[268px] h-[400px] rounded-lg overflow-hidden"
          >
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0D162F] to-transparent" />
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl">
              {card.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
