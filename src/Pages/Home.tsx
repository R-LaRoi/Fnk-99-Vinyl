
import { Footer } from "../Components/Footer";
import { Products } from "../Components/Products"
import { Hero } from '../Components/Hero'
// import { ArtistProfiles } from "./ArtistProfiles";

interface Product {
  id: string;
  img_url: string;
  is_available: string;
  name: string;
  price: string;
  qty: string;
  title: string;
  type: string;
  _id: string;
  desc: string;
}

interface HomeProps {
  products: Product[];
}

const heroVideo = "https://github.com/user-attachments/assets/e82835d1-ba82-4180-b34e-a51755367df0"

export function Home({ products }: HomeProps) {
  console.log(products);
  return (
    <>
      <Hero video={heroVideo} title="FNK 99" />
      <div className="text-center mb-10">
        <h1 className="text-9xl mt-10 text-center text-gray-900 ">THIS JUST IN</h1>
        <h3 className="text-4xl text-center text-gray-900 ">Check out our latest collection</h3>
      </div>

      <div className="products-container">
        {products.length > 0 && (
          products.slice(0, 4).map(product => (
            <Products key={product.id} products={product} />
          ))
        )}
      </div>
      <div className="mt-20">
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
                <h1 className="text-7xl">Shakes & Les</h1>
                <h3>FUNK 99</h3>
                <p className="ap-desc">"Funk 99" is more than just a song; it's a celebration of culture, rhythm, and community. With its catchy intro and engaging lyrics, Shakes & Les, along with LeeMcKrazy, have crafted a track that not only entertains but also invites listeners to join in the fun. As the Amapiano genre continues to evolve, "Funk 99" stands out as a testament to the creativity and vibrancy of South African music.</p>

              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />

    </>
  )
}





