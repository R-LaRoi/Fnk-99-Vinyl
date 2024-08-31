
import logo from "../dist/assets/logo.png";

interface FooterProps {
}

export function Footer({ }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-white py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={logo} alt="logo" className="h-24 w-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2 tracking-[2px]">FNK 99 RECORDS</h3>
            <p className="text-xs lowercase tracking-[2px]">FNK 99 Records is more than just a store; it is a community hub for music lovers. We invite you to visit us, explore our collection, and share in the joy of music. Join us in celebrating the art of vinyl and the culture that surrounds it!</p>
          </div>
          <div></div>
          <div className="flex items-center justify-center h-[200px] md:h-auto">
            <div className="text-center">
              <h3 className="text-lg font-bold tracking-[4px] mb-4">Connect With Us</h3>
              <div className="space-y-2">
                <div><a href="https://open.spotify.com/playlist/02LtXdK3vRDKtKSiQxuTIq?si=32660bd953ee4935" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">SPOTIFY</a></div>
                <div><a href="https://soundcloud.com/damuthefudgemunk/sets/how-it-should-sound-vol-1-2-1" className="hover:text-gray-300">Soundcloud</a></div>
                <div><a href="https://archieshepp.bandcamp.com/" className="hover:text-gray-300">bandcamp</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 text-xs tracking-[4px] text-center">
        © {new Date().getFullYear()} FNK 99 RECORDS. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;