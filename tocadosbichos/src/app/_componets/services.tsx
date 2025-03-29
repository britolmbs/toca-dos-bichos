"use client"
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock, HotelIcon  } from 'lucide-react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { title } from 'process'

const services =[
    {
      title: "Banho & Tosa",
    description: "Inclue banho com produtos especificos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas.",
    duration: "1h",
    price: "R$50",
    icon: <Scissors />,
    linkText: "Olá, vi no site sobre Banho e tosa e gostaria de mais informações." 
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clínico básico ou especializado para cuidar da saúde do animal.",
        duration: '2h',
        price: 'R$45',
        icon: <Syringe />,
        linkText: 'Olá, vi no site sobre Consulta Veterinaria e gostaria de mais informações'
    },
    {
        title: '',
        description: '',
        duration: '3h',
        price: 'R$80',
        icon: <Hotel />,
        linkText: 'Olá, vi no site sobre Hotel e gostaria de mais informações'
    },
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints:{
            "(min-whidth: 768)": {slidesToScroll: 3}
        }

    })

    function scrollPrev (){
        emblaApi?.scrollPrev();
    }
    function scrollNext(){
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div>
                    <h2 className="font-bold mb-12 text-4xl font-4xl">Serviços</h2>
                </div>
                <div className="relative">
                    <div className='overflow-hidden' ref={emblaRef}>
                        <div className='flex'>
                            {services.map((item, index) => (
                                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                                    <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col'>
                                       <div className='flex-1 flex items-start justify-between'>

                                        <div className='flex gap-3'>
                                            <span className='text-3xl'>{item.icon}</span>
                                            <div>
                                                <h3 className='font-bold text-x1 my-1'>{item.title}</h3>
                                                <p className='text-gray-400 text-sm select-none '>{item.description}</p>
                                            </div>
                                        </div>
                                        </div> 
                                        <div className='border-t  border-gray-700 pt-4 flex items-center justify-between'>
                                            <div className='flex items-center gap-2 text-sm'>
                                                <Clock className='w-4 h-4' />
                                                <span>{item.duration}</span>
                                            </div>
                                            <a target='_blank' href={`https://wa.me/552124189687?text=${item.linkText}`} className='flex items-center justify-center gap-2 hover:bg-red-500 px-4 py-1 rounded-md duration-300'>
                                                Entrar em Contato
                                                <WhatsappLogo className='w-5 h-5' />
                                            </a>
                                        </div>
                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>
                    <button onClick={scrollPrev} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronLeft className='w-6 h-6 text-gray-600' />
                    </button>
                    <button onClick={scrollNext} className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'>
                        <ChevronRight className='w-6 h-6 text-gray-600' />
                    </button>
                </div>

            </div>

        </section>
    )
}