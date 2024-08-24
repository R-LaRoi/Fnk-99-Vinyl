import { Link } from "react-router-dom"
import "../Styles/artistprofile.css"
import { Profiles } from "../Components/AProfiles"
import { Products } from "../Components/Products"
import Footer from "../Components/Footer"



interface Profiles {
  desc: string;
  _id: string;
  img_url: string;
  spotify_url: string;
  name: string;

}

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

interface ProfileProps {
  profiles: ProfileProps[]
  products: Product[]

}


export function ArtistProfiles({ profiles, products }: ProfileProps) {

  return (
    <>
      <section className="ap-container">
        <div className="text-center text-lg">
          <h1 className=" ap-title text-8xl  text-center text-gray-900  ">ARTIST PROFILE</h1>
          <p className="text-xl pb-4">Follow our monthly selections and be a part of a vibrant <br /> community of music lovers who share your passion for discovering new sounds.</p>
          <div className="ap-line"></div>
        </div>
        <div className="artist-profile mt-10">

        </div>
      </section>
      <section className="a-profiles">

        <div className="">
          {profiles.map((profile: any, index: number) => (
            <Profiles key={index} profiles={profile} />
          ))}
        </div>

        <div className="column-one p-6">
          <h1 className="text-7xl ">SHOP COLLECTION</h1>
          <Link to="/shop">
            <button>More Vinyl</button>
          </Link>
        </div>

        <div className="column-two">
          <div className="products-container">
            {products.length > 0 && (
              products.slice(7, 11).map(product => (
                <Products key={product.id} products={product} />
              ))
            )}

          </div>
        </div>
      </section>
      <Footer />

    </>
  )
}

