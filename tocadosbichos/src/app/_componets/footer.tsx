import royal from '../../../public/royal.png'
import golden from '../../../public/golden.png'
import premier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'

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
                </div>
            </div>

        </section>
    )
}