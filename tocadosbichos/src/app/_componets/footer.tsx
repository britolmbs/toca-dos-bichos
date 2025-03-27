import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import premier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'

const brands =[
    { name: "Royal Canin", logo: royal },
    { name: "Golden", logo: golden },
    { name: "Primier", logo: premier },
    { name: "Formula Natural", logo: natural },
    { name: "Whiskas", logo: whiskas},
]
export function Footer(){
    return(
        <section className='bg-[#E84c3d] py-16 text-white'>
            <div className='container mx-auto px-4'>
                <div className="border-b border-white/20 pb-8">
                <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>

                <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
                    {brands.map((item, index) => (
                        <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center'>
                            <Image 
                            src={item.logo}
                            alt={item.name} 
                            className='object-contain'
                            width={100}
                            height={50}
                            quality={100}
                            style={{
                                 width: 'auto',
                                height: 'auto',
                                    }} />
                            
                        </div>
                    ))}
                </div>
                </div>
                <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'>
                    <div>
                        <h3 className='text-2xl font-semibold mb-2'>Toca dos Bichos</h3>
                        <p className='mb-4'>Cuidando do seu melhor amigo com amor e dedicação</p>
                        <a href="#" className='bg-green-500 px-4 py-2 round-md'>
                            contato via Whatsapp
                        </a>
                    </div>
                    <div>
                        
                    </div>
                </footer>
            </div>

        </section>
    )
}