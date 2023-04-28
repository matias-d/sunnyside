import imgTransform from '../assets/image-transform.jpg'
import imgStand from '../assets/image-stand-out.jpg'
import imgMoras from '../assets/image-graphic-design.jpg'
import imgOrange from '../assets/image-photography.jpg'
import imgMorasMb from '../assets/image-graphic-design-mb.jpg'
import imgOrangeMb from '../assets/image-photography-mb.jpg'
export  function About() {
  return (
    
    <section className="w-full">
      <section className='flex flex-col-reverse lg:flex-row'>
        <article className="flex flex-col items-center justify-center gap-y-8  flex-1 text-center lg:text-start py-16 lg:py-0">
        <h3 className="text-4xl font-fraunces  text-dark-blue font-bold w-96">Transform your brand</h3>
        <p className="font-barlow text-dark-gray-blue w-80 lg:w-96">
          We are a full-service creative agency specializing in helping brands grow fast.Engage your clients through compelling visuals that do most of the marketing for you.
        </p>

        <h5 className="text-sm relative  font-fraunces text-dark-blue font-extrabold before:absolute before:w-full before:h-2 before:bg-yellow-200 before:z-[-1] before:bottom-0 before:left-0 before:rounded-full cursor-pointer before:hover:bg-yellow-300 transition-all lg:self-start self-auto lg:ml-32 ">LEARN MORE</h5>
        </article>
        <img src={imgTransform} alt="background yellow with egg" className="w-full lg:w-96 h-auto object-cover flex-1"/>       
      </section>
      <section className='flex flex-col lg:flex-row w-full'>
        <img  src={imgStand} alt="background red with a cup" className='flex-1 w-full lg:w-96 h-auto'/>
        <article className="flex flex-col items-center justify-center gap-y-8 w-full lg:w-96 mx-auto flex-1 py-16 lg:py-0 text-center lg:text-start">
        <h3 className="text-4xl font-fraunces  text-dark-blue font-bold w-80 lg:w-96">Stand out to the right audience</h3>
        <p className="font-barlow text-dark-gray-blue w-80 lg:w-96">
          Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we´ll build and extend your brand in digital places.
        </p>

        <h5 className="text-sm relative font-fraunces text-dark-blue font-extrabold before:absolute before:w-full before:h-2 before:bg-red-200 before:z-[-1] before:bottom-0 before:left-0 before:rounded-full cursor-pointer before:hover:bg-red-300 transition-all   lg:self-start self-auto lg:ml-32 ">LEARN MORE</h5>
        </article>
      </section>
      <section className='flex flex-col lg:flex-row'>
      <article className="relative">
        <img  src={imgMoras} alt="background cyan  with a moras" className="object-cover  hidden lg:block"/>
        <img  src={imgMorasMb} alt="background cyan  with a moras" className="object-cover  lg:hidden block"/>
        <main className="absolute w-96 mx-auto bottom-10 lg:bottom-12 text-center left-1/2 -translate-x-1/2 flex flex-col gap-y-6">
          <h4 className="text-4xl lg:text-2xl font-fraunces font-extrabold text-dark-cyan">Graphic Design</h4>
          <p className="font-barlow text-dark-cyan/80 w-80 lg:w-auto mx-auto">Great design you memorable.We deliver artwork that underscores your brand message and captures potential clients´attention.</p>
        </main>

      </article>
      <article className="relative">
        <img  src={imgOrange} alt="background blue with a orange" className="object-cover  hidden lg:block"/>
        <img  src={imgOrangeMb} alt="background blue with a orange" className="object-cover lg:hidden block"/>
        <main className="absolute w-80 mx-auto bottom-10 lg:bottom-12 text-center left-1/2 -translate-x-1/2 flex flex-col gap-y-6">
          <h4 className="text-4xl lg:text-2xl font-fraunces font-extrabold text-moderate-blue">Photography</h4>
          <p className="font-barlow text-moderate-blue/80 w-80 lg:w-auto ">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </main>
      </article> 
      </section>
    </section>
  )
}
