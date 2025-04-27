'use client'

import useEmblaCarousel from "embla-carousel-react"
import tutor1 from "../../../public/tutor1.png";
import tutor2 from "../../../public/tutor2.png";
import tutor3 from "../../../public/tutor3.jpg";
import tutor4 from "../../../public/tutor4.jpg";
import tutor5 from "../../../public/tutor5.jpg";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


const depoimentos = [
    {
        content: 'Desde que comecei a comprar as rações aqui, ela nunca estave tão feliz! O atendimento é impecável, os profissionais são supercuidadosos.',
        author: 'Mariana Souza',
        role: 'Tutora da Luna (Golden Retriever)',
        image: tutor2,

},
    {
        content: 'Os produtos de higiene são de ótima qualidade. O banho do meu cachorro agora é muito mais fácil e ele sai cheiroso!',
        author: 'Rafael',
        role: 'Tutor do Thor (Bulldog francês)',
        image: tutor1,
    },
    {
        content: 'O serviço de entrega de ração e medicação são otimos! Os profissionais estao sempre cuidadosos e bem qualificados.',
        author: 'Thais',
        role: 'Tutora do Nino (Bulldog)',
        image: tutor4,
    },
        { content: 'As vitaminas que comprei ajudaram muito na saúde do meu gato. Ele está mais ativo e brincalhão! A equipe sempre me orienta com muito carinho.',
            author: 'Pedro Martins',
            role: 'Tutor do Felix (siamês)',
            image: tutor3,

        },
        {
            content: 'A nova caminha que comprei para a Bella é um sucesso! Ela não sai de lá e parece tão confortável. O atendimento foi excelente e ajudou na escolha!',
            author: 'Amanda Lima',
            role: 'Tutora da Bella (Poodle)',
            image: tutor5,

        },

]
export function Depoimentos (){
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true
    })

    function scrollPrev (){
        emblaApi?.scrollPrev();
    }
    function scrollNext (){
        emblaApi?.scrollNext();
    }

    return(
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl text-center font-bold mb-12">Depoimentos</h2>
                <div className="relative max-w-4xl mx-auto ">

                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex">
                            {depoimentos.map((item, index) =>(
                                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                                    <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                                        <div className="flex flex-col items-center text-center space-y-4">
                                            <div className="relative w-24 h-24">
                                            <Image src={item.image} alt={item.author}
                                            fill
                                            sizes="96px"
                                            className="object-cover rounded-full" />
                                            </div>
                                            <p className="text-gray-200">{item.content}</p>
                                            <div>
                                                <p className="font-bold">{item.author}</p>
                                                <p className="text-sm text-gray-400">{item.role}</p>
                                            </div>

                                        </div>
                                    </article>
                                </div>
                            ))}

                        </div>
                    </div>
                <button onClick={scrollPrev} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <button onClick={scrollNext} className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10">
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
                </div>

            </div>

        </section>
    )
}