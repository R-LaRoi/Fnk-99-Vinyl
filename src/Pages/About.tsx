import '../Styles/about.css'

interface AboutProps { }

export function About({ }: AboutProps) {
  return (
    <>
      <section className="about-body p-4 sm:p-6 md:p-9">
        <div className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl p-0 m-0 tracking-[2px] sm:tracking-[3px] md:tracking-[5px] leading-tight">
          GET INTO THE GROOVE.
        </div>
        <br />
        <div className='text-xl sm:text-2xl md:text-3xl p-0 m-0 mt-4'>
          We're here to keep the music playing.
        </div>
        <p className='text-sm md:text-md w-full md:w-3/4 lg:w-1/2 tracking-[1px] mt-4'>
          FNK 99 Records is more than just a store; it is a community hub for music lovers. We invite you to visit us, explore our collection, and share in the joy of music. Join us in celebrating the art of vinyl and the culture that surrounds it!
        </p>
        <div className="mt-6 space-y-2">
          <p>contactus@email.com</p>
          <p>phone +123-456-7890</p>
          <p>address: 123 Main St, FarAway, Planet</p>
        </div>
      </section>

    </>

  )
}

