interface ArtistProfileData {
  desc: string;
  _id: string;
  img_url: string;
  spotify_url: string;
  name: string;

}

interface ProfileProps {
  profiles: ArtistProfileData


}

export function Profiles({ profiles }: ProfileProps) {

  const { name, desc, img_url, spotify_url } = profiles;


  return (
    <>
      <div className="profiles-container m-6">
        <div className="card-text text-gray-900">
          <h1 className="text-8xl name">{name} </h1>
          <h3 className="">FNK 99</h3>
          <p className="">{desc}</p>
          <ul><li className=" sp-btn  mt-2 w-[120px] px-5 py-1  rounded-full">       <a href={spotify_url} target="_blank" className="flex items-center text-inherit no-underline hover:text-pink-600 transition-colors duration-300">
            <span className="flex items-left">spotify
              <svg className="ml-2 w-6 h-6" width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.01 2.019c-5.495 0-9.991 4.496-9.991 9.991 0 5.494 4.496 9.99 9.991 9.99 5.494 0 9.99-4.496 9.99-9.99 0-5.495-4.446-9.991-9.99-9.991zm4.595 14.436c-.199.299-.549.4-.85.201-2.349-1.45-5.296-1.75-8.793-.951-.348.102-.648-.148-.748-.449-.101-.35.149-.648.45-.749 3.795-.85 7.093-.499 9.69 1.1.35.149.4.548.251.848zm1.2-2.747c-.251.349-.7.499-1.051.249-2.697-1.646-6.792-2.148-9.939-1.148-.398.101-.85-.1-.949-.498-.101-.402.1-.852.499-.952 3.646-1.098 8.143-.548 11.239 1.351.3.149.45.648.201.998zm.099-2.799c-3.197-1.897-8.542-2.097-11.59-1.146a.938.938 0 0 1-1.148-.6.937.937 0 0 1 .599-1.151c3.547-1.049 9.392-.85 13.089 1.351.449.249.599.849.349 1.298-.25.35-.849.498-1.299.248z" />
              </svg> </span>
          </a>

          </li></ul>
        </div>
        <img src={img_url} alt="" className="image-profile p-1" />
      </div>
    </>



  )

}
