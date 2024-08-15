import '../Styles/about.css'

interface AboutProps { }

export function About({ }: AboutProps) {
  return (
    <>
      <section className="about-body p-9">
        <div className="text-9xl p-0 m-0 tracking-[5px]">
          GET INTO THE GROOVE.
        </div>
        <br />
        <div className='text-3xl p-0 m-0'> We're here to keep the music playing. </div>
        <p className='text-md w-1/2 tracking-[1px]'>FNK 99 Records is more than just a store; it is a community hub for music lovers. We invite you to visit us, explore our collection, and share in the joy of music. Join us in celebrating the art of vinyl and the culture that surrounds it!</p>
        <p className='mt-4'>contactus@email.com</p>
        <p>phone +123-456-7890</p>
        <p>address: 123 Main St, FarAway, Planet</p>
      </section>

    </>

  )
}

