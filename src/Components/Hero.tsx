import "../Styles/hero.css"

type HeroProps = {

video: string
title: string

}

export function Hero({video, title}: HeroProps) {
  return (
    <section className="container">
    <div className='hero-video'>
<video src={video}
          autoPlay
          muted
          loop 
          typeof='video/mp4'
          >
          </video>
          <div>
            <div className="overlay">{title}</div>
            {/* <span>est.2024</span> */}
            </div>
    
    </div>
    </section>
    
)}