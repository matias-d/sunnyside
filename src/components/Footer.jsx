import bottles from '../assets/image-gallery-milkbottles.jpg'
import oranges from '../assets/image-gallery-orange.jpg'
import cone from '../assets/image-gallery-cone.jpg'
import cubes from '../assets/image-gallery-sugarcubes.jpg'
import LogoSvg from "../assets/svg/LogoSvg"
import facebook from '../assets/svg/icon-facebook.svg'
import instagram from '../assets/svg/icon-instagram.svg'
import twitter from '../assets/svg/icon-twitter.svg'
import pinterest from '../assets/svg/icon-pinterest.svg'

export function Footer() {
  return (
    <footer>
      <section className="grid grid-cols-2 lg:grid-cols-4">
        <img src={bottles} alt="bottles of milk"/>
        <img src={oranges} alt="orange in dish"/>
        <img src={cone} alt="cone of ice cream"/>
        <img src={cubes} alt="cubes"/>
      </section>
      <section className="bg-cyan-light flex flex-col gap-y-6 items-center py-16">
        <LogoSvg color={'#458c7e'}/>
        <nav className="flex gap-x-12 items-center mb-10">
          <p className="text-moderate-cyan font-barlow hover:text-white transition-colors cursor-pointer">About</p>
          <p className="text-moderate-cyan font-barlow hover:text-white transition-colors cursor-pointer">Services</p>
          <p className="text-moderate-cyan font-barlow hover:text-white transition-colors cursor-pointer">Projects</p>
        </nav>
        <section className="flex gap-x-8 items-center">
          <img src={facebook} alt="facebook icon svg" className='text-white'/>
          <img src={instagram} alt="instagram icon svg"/>
          <img src={twitter} alt="twitter icon svg"/>
          <img src={pinterest} alt="pinterest icon svg"/>
        </section>
      </section>
    </footer>
  )
}
