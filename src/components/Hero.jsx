import iconArrowDown from '../assets/svg/icon-arrow-down.svg'
export function Hero() {

  return (
    <section className="bg-[url('./assets/image-header.jpg')] min-h-screen bg-center bg-no-repeat bg-cover w-full relative pt-28">
      <h1 className="font-fraunces font-extrabold text-white text-5xl lg:text-7xl tracking-widest text-center pt-20  lg:pt-40">WE ARE CREATIVES</h1>
      <img src={iconArrowDown} alt='icon arrow down svg' className='w-8 lg:w-10 mx-auto pt-36'/>
  </section>
  )
}
