
import { Check } from "lucide-react";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import Image from "next/image";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="relative" data-aos="fade-up-right" data-aos-delay='300'>
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto cachorro e gato"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"/>
          </div>

          <div className="absolute  w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
          <Image
          src={about2Img}
          alt="foto gato"
          fill
          quality={100}
          priority
          className="object-cover" />
          </div>
        </div>

        <div className="space-y-6" data-aos='fade-up-left' data-aos-delay='300'>
            <h2 className="text-4x1 font-bold">Sobre</h2>
            <p>Bem-vindo à Toca dos Bichos! Somos um pet shop familiar com mais de uma década de experiência, atuando desde 2012 na região de Santa Cruz, Rio de Janeiro. Ao longo desses anos, conquistamos a confiança e o carinho dos nossos clientes, expandindo nossas operações para três lojas, sempre com o objetivo de proporcionar o melhor para os seus pets.</p>
            <p>Aqui na Toca dos Bichos, acreditamos que cada animal é parte da família e merece o melhor cuidado. Por isso, trabalhamos com uma ampla variedade de produtos de qualidade, incluindo renomadas marcas como Quatree, Fórmula, Whiskas e Premier. Além de ração para cães e gatos, também oferecemos medicamentos e rações específicas para diversos animais, como milho, ração para coelhos e passarinhos.</p>
            <p>Nosso compromisso vai além de oferecer produtos de qualidade; buscamos atender cada cliente de forma personalizada, entendendo as necessidades de cada pet e proporcionando um atendimento acolhedor e atencioso. Venha nos visitar e descubra tudo que podemos oferecer para garantir a saúde e felicidade do seu melhor amigo!</p>
                 <ul className="space-y-4 mt-10">
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Aberto desde de 2012
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="text-red-500" />
                        Entrega Gratis na sua residencia
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-red-500" />
                      Melhores preços da Região
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className='text-red-500' />
                      Qualidade é nossa prioridade
                    </li>
                 </ul>
                 <div className="flex gap-2">
                 <a target='_blank' href={`https://wa.me/552124189687?text=Olá vim pelo site e gostaria de mais informações`} 
                 className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                  <WhatsappLogo className='w-5 h-5 text-white' />
                  Contato via WhatsApp
                 </a>

                 <a target="_blank" href="https://maps.app.goo.gl/L4fJd4R6TB3aWYAUA" className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                  <MapPin className='w-5 h-5 text-black' />
                  Endereço da Loja
                 </a>
                 </div>

        </div>

        </div>
      </div>
    </section>
  )
}
