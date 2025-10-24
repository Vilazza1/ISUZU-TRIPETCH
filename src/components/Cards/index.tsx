import Image from "next/image";

export default function Cards() {
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
            className="relative w-[268px] h-[400px] rounded-lg overflow-hidden group cursor-pointer"
          >
            {/* Imagem */}
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover transition duration-500 group-hover:opacity-70"
            />

            {/* Overlay vermelho */}
            <div className="absolute inset-0 bg-[#EE0505] opacity-0 group-hover:opacity-50 transition duration-500" />

            {/* Gradiente inferior (para o título original) */}
            <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[#0D162F] to-transparent transition duration-500 group-hover:opacity-0" />

            {/* Título original (some no hover) */}
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-bold text-2xl transition duration-500 group-hover:opacity-0">
              {card.title}
            </span>

            {/* Conteúdo central que aparece no hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
              <span className="text-white font-bold text-3xl mb-2">
                {card.title}
              </span>
              <span className="text-white text-sm uppercase tracking-widest">
                Read more
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
