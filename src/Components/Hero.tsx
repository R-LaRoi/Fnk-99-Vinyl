import "../Styles/hero.css"

type HeroProps = {

  video: string
  title: string

}

export function Hero({ video, title }: HeroProps) {
  return (
    <>
      <div className=''>
        <h1 className=' pt-32 hero-sub-text text-center uppercase text-[#292929] text-9xl'>
          We're here to keep <br /> the music playing.
        </h1>
      </div>
      <div className='relative flex flex-col sm:flex-row items-center justify-center brand px-4 py-16 md:px-8  overflow-hidden'>
        <div className="w-25 sm:w-[76%] max-w-5xl mx-2 sm:mx-4 ">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-full h-auto sm:w-[70%] ml-[15%] mb-video"
            id="jmp"
          >
            <source
              src={video}
              type="video/mp4"
            />
          </video>
        </div>
        <div className='absolute left-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-4xl lg:text-7xl uppercase font-bold whitespace-nowrap z-10 text-[#292929]'>{title}</div>
        <div className='absolute right-4 top-1/2 transform -translate-y-1/2 text-4xl sm:text-4xl lg:text-7xl uppercase font-bold whitespace-nowrap z-10 text-[#292929]'>{title}</div>
      </div>

      {/* <h1 className='text-3xl font-bold uppercase text-center p-16 text-[#292929]'>New Releases Every Friday!</h1>
      <div className="flex flex-col sm:flex-row items-center justify-center h-auto  space-y-4 sm:space-y-0 ">

        <div className="text-xs lg:text-sm text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
          <div>
            We specialize in bringing you the best of reggae, dancehall, and soca music from around the world. Our online store offers a vast collection of vinyl,ensuring you have access to the latest releases and timeless classics.
          </div>

        </div>
        <div className="text-xs lg:text-sm text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
          Whether you're a seasoned fan or just discovering the genre, our platform is designed to connect you with the vibrant culture and rich heritage of reggae music.
          Explore our catalog today and immerse yourself in the rhythms that have captivated hearts globally.
        </div>
      </div> */}
    </>

  )
}