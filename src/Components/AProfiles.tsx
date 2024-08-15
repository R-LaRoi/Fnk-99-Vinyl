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
    <> <div className="artist-profile mt-10 p-3">
      <div className="column-one">
        <img src={img_url} alt="" className="image-profile" />
        <h1 className="text-5xl">{name} </h1>
        <h3>FUNK 99</h3>
        <p className="ap-desc">{desc}</p>
        <ul><li><a href={spotify_url}>Check out the Artist Here</a></li></ul>
      </div>
    </div>
    </>



  )

}
