
import logo from "../dist/assets/logo.png";

interface FooterProps {
}

export function Footer({ }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white h-[40vh] flex flex-col justify-center items-center text-stone-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div>
              <img src={logo} alt="logo" className="logo h-24 w-auto" />
            </div>
            <h3 className="text-2xl font-bold mb-2 tracking-[2px]">FNK 99 RECORDS</h3>
            <p className="text-xs lowercase tracking-[2px]"> FNK 99 Records is more than just a store; it is a community hub for music lovers. We invite you to visit us, explore our collection, and share in the joy of music. Join us in celebrating the art of vinyl and the culture that surrounds it!</p>
          </div>
          <div>

          </div>
          <div className="flex items-center justify-center h-[200px] ">
            <div className="text-center">
              <h3 className="text-lg font-bold  tracking-[4px]">Connect With Us</h3>
              <div><a href="https://open.spotify.com/playlist/02LtXdK3vRDKtKSiQxuTIq?si=32660bd953ee4935" target="_blank">SPOTIFY</a></div>
              <div> <a href="https://soundcloud.com/damuthefudgemunk/sets/how-it-should-sound-vol-1-2-1">Soundcloud</a></div>
              <div> <a href="https://archieshepp.bandcamp.com/">bandcamp</a></div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xs tracking-[4px]">
        © {new Date().getFullYear()} FNK 99 RECORDS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;