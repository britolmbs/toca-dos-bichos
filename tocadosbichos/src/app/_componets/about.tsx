
import { Check } from "lucide-react";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import Image from "next/image";
import { MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">

      <div className="container mx-auto grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto cachorro e gato"
              fill
              quality={100}
              priority
              className="object-cover hover:scale-110 duration-300"/>
          </div>

          <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
          <Image
          src={about2Img}
          alt="foto gato"
          fill
          quality={100}
          priority
          className="object-cover" />
          </div>
        </div>

        <div className="space-y-6">
            <h2 className="text-4x1 font-bold">Sobre</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut efficitur risus. In hac habitasse platea dictumst. 
                Duis at mollis est. Donec volutpat ornare risus, ut mollis magna feugiat in. Vivamus ac sodales purus.
                 Sed urna justo, commodo eu elementum ut, tincidunt consequat erat. Cras faucibus id leo et feugiat. 
                 Sed ultricies arcu metus, ac feugiat ex luctus in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
                  Phasellus consectetur mattis porttitor.
                 Nulla id efficitur turpis. Etiam convallis id tortor congue porttitor. Aliquam erat volutpat.</p>
                 <ul className="space-y-4">
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
                 <a href="#" className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                  <WhatsappLogo className='w-5 h-5 text-white' />
                  Contato via WhatsApp
                 </a>

                 <a href="#" className="bg- text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md">
                  <MapPin className='w-5 h-5 text-white' />
                  Endereço da Loja
                 </a>


        </div>
      </div>
    </section>
  )
}
