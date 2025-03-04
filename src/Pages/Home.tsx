
import { Footer } from "../Components/Footer";
import { Products } from "../Components/Products"
import { Hero } from '../Components/Hero'
import "../Styles/hero.css"
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
      <Hero video={heroVideo} title="FNK 99 RECORDS" />

      <div className="text-center mb-10">
        <h1 className="text-9xl mt-10 text-center text-[#292929]">THIS JUST IN</h1>
        <h3 className="text-4xl text-center text-[#292929] ">Check out our latest collection</h3>
      </div>

      <div className="products-container">
        {products.length > 0 && (
          products.slice(0, 4).map(product => (
            <Products key={product.id} products={product} />
          ))
        )}
      </div>
      <div className="mt-20 container mx-auto px-4">
        <section className="ap-container max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="ap-title text-6xl md:text-8xl text-center text-[#292929] mb-4">ARTIST PROFILE</h1>
            <p className="text-lg md:text-xl pb-4">
              Follow our monthly selections and be a part of a vibrant <br className="hidden md:inline" />
              community of music lovers who share your passion for discovering new sounds.
            </p>
            <div className="ap-line mx-auto w-1/2 border-b-2 border-[#292929] my-8"></div>
          </div>

          <div className="artist-profile mt-10 flex flex-col items-center">
            <div className="w-full md:w-3/4 lg:w-2/3">
              <img
                src="https://github.com/user-attachments/assets/98f3d686-b656-4556-8c6c-392a1a4f46b8"
                alt="Shakes & Les"
                className="image-profile rounded-md w-full"
              />
            </div>
            <div className="text-center text-[#292929]  max-w-2xl">

              <h3 className="text-xl md:text-2xl mb-4">Shakes & Les</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center h-auto  space-y-4 sm:space-y-0 py-16  ">

                <div className="text-xl lg:text-xl text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
                  <div>
                    <b>Funk 99</b> is more than just a song; it's a celebration of culture, rhythm, and community. With its catchy intro and engaging lyrics, Shakes & Les, along with LeeMcKrazy, have crafted a track that not only entertains but also invites listeners to join in the fun. As the Amapiano genre continues to evolve,"Funk 99 stands out as a testament to the creativity and vibrancy of South African music.
                  </div>

                </div>
                <div className="text-xl lg:text-xl text-justify w-75 sm:w-[40ch] px-4 text-zinc-700">
                  In 2024, Amapiano continued its remarkable global ascent, marking a decade since its emergence as a vibrant South African music genre. The genre's infectious beats and cultural influence have transcended borders, with significant traction in countries like Nigeria, the USA, UK, Germany, and France
                </div>

                <div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>


      <Footer />

    </>
  )
}






