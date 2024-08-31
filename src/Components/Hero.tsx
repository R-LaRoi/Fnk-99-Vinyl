import "../Styles/hero.css"

type HeroProps = {

  video: string
  title: string

}

export function Hero({ video, title }: HeroProps) {
  return (
    <>
      <div className='hero-video'>
        <video src={video}
          autoPlay
          muted
          loop
          typeof='video/mp4'
        >
        </video>
        <div>
          <div className="overlay">{title}
            <div className="sub-text">We're here to keep the music playing.</div>
          </div>

        </div>

      </div>
    </>

  )
}