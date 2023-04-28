import emily from '../assets/testimonials/image-emily.jpg'
import thomas from '../assets/testimonials/image-thomas.jpg'
import jennie from '../assets/testimonials/image-jennie.jpg'

const testimonials =  [
    {
      id: 1,
      image : emily,
      feedback : 'We put trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
      name : 'Emily R.',
      position : 'Marketing Director'
    },
    {
      id: 2,
      image : thomas,
      feedback : 'Sunnyside´s enthusiasm coupled with their keen interest in our brand´s success made it a satisfying and enjoyable experience.',
      name : 'Thomas S.',
      position : 'Chief Operating Officer'
    },
    {
      id: 3,
      image : jennie,
      feedback : 'Incredible en result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
      name : 'Jennie F.',
      position : 'Business Owner'
    }
  ]

export  function Testimonials() {
  return (
    <section className="flex flex-col gap-y-14 lg:gap-y-16 items-center justify-center py-28 ">
    <h2 className="text-lg tracking-widest font-fraunces text-gray-text">CLIENT TESTIMONIALS</h2>
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
      {
        testimonials.map(testimonial => (
          <article key={testimonial.id} className="flex flex-col gap-y-12 items-center">
            <img src={testimonial.image} alt="person image" className="object-cover h-16 w-16 rounded-full"/>
            <p className="w-80 text-center font-barlow text-gray-blue">{testimonial.feedback}</p>
            <footer className="flex flex-col items-center gap-y-1">
              <h3 className="text-lg font-fraunces font-extrabold text-dark-blue">{testimonial.name}</h3>
              <p className="text-sm font-barlow text-gray-text">{testimonial.position}</p>
            </footer>
        </article>
        ))
      }
    </section>
  </section>
  )
}
