import "./styles/hero.css"
type HeroProps = {

video: string
title: string

}

export function Hero({video, title}: HeroProps) {
  return (
    <>
{/* <div className="relative h-screen w-full">
  <video className="hero-video absolute inset-0 z-10 object-cover" 
   src={video} typeof="video/mp4"
  autoPlay muted loop
  >
  </video>
  
  <div className="overlay absolute inset-0 flex items-center justify-center text-white text-4xl">

    <h1>{title}</h1>
  </div>
</div> */}
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