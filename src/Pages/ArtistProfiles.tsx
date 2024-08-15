import { Link } from "react-router-dom"
import "../Styles/artistprofile.css"
import Footer from "../Components/Footer"
interface ArtProps {



}

export function ArtistProfiles({ }: ArtProps) {
  return (
    <>
      <section className="ap-container">
        <div className="text-center text-lg">
          <h1 className=" ap-title text-8xl  text-center text-gray-900  ">ARTIST PROFILE</h1>
          <p className="text-xl pb-4">Follow our monthly selections and be a part of a vibrant <br /> community of music lovers who share your passion for discovering new sounds.</p>
          <div className="ap-line"></div>
        </div>

        <div className="artist-profile mt-10">
          <div className="column-one">
            <img src="https://github.com/user-attachments/assets/98f3d686-b656-4556-8c6c-392a1a4f46b8" alt="" className="image-profile" />
          </div>
          <div className="column-two">
            <div>
              <h1 className="text-7xl">Shakes & Les </h1>
              <h3>FUNK 99</h3>
              <p className="ap-desc">"Funk 99" is more than just a song; it's a celebration of culture, rhythm, and community. With its catchy intro and engaging lyrics, Shakes & Les, along with LeeMcKrazy, have crafted a track that not only entertains but also invites listeners to join in the fun. As the Amapiano genre continues to evolve, "Funk 99" stands out as a testament to the creativity and vibrancy of South African music.</p>
              <ul><li>spotify</li><li>apple music</li><li>youtube</li></ul>
            </div>
          </div>
        </div>


      </section>
      <section className="section-four">
        <div className="column-one">
          <Link to="/shop">
            <button>Shop</button>
          </Link>
        </div>

        <div className="column-two"></div>
      </section>

    </>
  )
}

