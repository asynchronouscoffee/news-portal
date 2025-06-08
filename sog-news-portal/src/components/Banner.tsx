import Image from 'next/image';
import { Button } from "@/components/ui/button";
import bannerImg from '@/assets/couple-vespa.jpg'

const Banner = () => {
    return (
        <section className='bg-gray-100 py-8'>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 px-4 sm:px-6 lg:px-8 py-5'>
                <div className='w-full'>
                    <Image src={bannerImg} 
                    alt="Couple is dating with vespa" 
                    placeholder='blur'
                    className='w-full h-auto object-cover rounded-md'
                    />
                </div>

                {/* Content */}
                <div className='flex flex-col space-y-4'>
                    <h4 className='text-sm font-medium text-gray-500'>Featured</h4>
                    <h2 className='text-3xl font-bold text-gray-900'>Mengapa Vespa Cocok untuk Ngedate?</h2>
                    <p>
                        Dalam dunia yang serba cepat dan serba digital, mencari momen kebersamaan yang autentik bersama pasangan bisa menjadi hal yang langka. Di tengah hiruk-pikuk kota atau rutinitas yang padat, Vespa hadir bukan sekadar sebagai kendaraan, tetapi sebagai simbol romansa klasik yang abadi. 
                        <br /> <br />
                        Tak heran jika banyak pasangan, terutama generasi muda yang mengusung gaya hidup retro dan estetika vintage, menjadikan Vespa sebagai pilihan utama untuk menghabiskan waktu bersama. Tapi, mengapa sebenarnya Vespa begitu cocok untuk ngedate?
                    </p>

                    <Button variant="default">Baca selengkapnya</Button>
                </div>
            </div>
        </section>
    )
}

export default Banner