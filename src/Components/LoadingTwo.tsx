import '../Styles/loading.css'

export default function LoadVideo() {


  return (
    <div className='loader-two'>
      <center className='loading-circle  h-screen mt-[12rem] '><br /><br /><br />
        <div className="loader" id="loader"></div>
        <div className="loader" id="loader2"></div>
        <div className="loader" id="loader3"></div>
        <div className="loader" id="loader4"></div>
        <span id="text">Get Into The Groove</span>
        <br />
      </center>
    </div>
  );
}