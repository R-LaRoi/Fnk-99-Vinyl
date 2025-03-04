import "../Styles/hero.css"

type HeroProps = {

  video: string
  title: string

}

export function Hero({ video, title }: HeroProps) {
  return (
    <>
      <div className=''>
        <h1 className=' pt-32 hero-sub-text text-center uppercase text-[#292929] md:text-xl lg:text-9xl'>
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


    </>

  )
}