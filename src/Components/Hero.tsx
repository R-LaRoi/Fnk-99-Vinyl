import "./styles/hero.css"
type HeroProps = {

video: string
title: string

}

export function Hero({video, title}: HeroProps) {
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
          <div className="overlay">
            <div className="title">{title}</div>
            <div>est.2024</div>
            </div>
    
    </div>
    </>
    
)}