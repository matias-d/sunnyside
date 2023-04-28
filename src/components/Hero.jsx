import iconArrowDown from '../assets/svg/icon-arrow-down.svg'
export function Hero() {

  return (
    <section className="bg-[url('./assets/image-header.jpg')] bg-center min-h-[80vh] bg-no-repeat bg-cover w-full relative pt-28">
      <h1 className="font-fraunces font-extrabold text-white text-4xl lg:text-6xl tracking-widest text-center pt-20  lg:pt-16">WE ARE CREATIVES</h1>
      <img src={iconArrowDown} alt='icon arrow down svg' className='w-8 lg:w-10 mx-auto pt-36'/>
  </section>
  )
}
