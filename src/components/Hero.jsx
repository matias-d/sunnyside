import iconArrowDown from '../assets/svg/icon-arrow-down.svg'
export function Hero() {

  return (
    <section className="bg-[url('./assets/image-header.jpg')] min-h-screen bg-center bg-no-repeat bg-cover w-full relative pt-28">
      <h2 className="font-fraunces font-extrabold text-white text-5xl tracking-widest text-center pt-8">WE ARE CREATIVES</h2>
      <img src={iconArrowDown} alt='icon arrow down svg' className='w-8 mx-auto pt-28'/>
  </section>
  )
}
