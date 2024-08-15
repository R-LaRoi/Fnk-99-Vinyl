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
    <> <div className="artist-profile mt-10">
      <div className="column-one">
        <img src={img_url} alt="" className="image-profile" />
        <h1 className="text-7xl">{name} </h1>
        <h3>FUNK 99</h3>
        <p className="ap-desc">{desc}</p>
        <ul><li>{spotify_url}</li></ul>
      </div>
    </div>
    </>



  )

}
