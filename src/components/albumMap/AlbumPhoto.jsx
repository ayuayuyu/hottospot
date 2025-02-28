import { useState } from "react";
import { useEffect } from "react";
import getAllLocation from "../../firebase/getTable/getAllLocation";

function AlbumPhoto() {
  const [photo, setPhoto] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllLocation();
        console.log("locationData:", data); // デバッグ用
        setPhoto(data);
        console.log("data.photo", data.photo);
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {photo.map((path,index) => {
        console.log("path", path.photo);

        return(
            <img src={path.photo} key={index} style={{width:"100px" , height:"100px", borderRadius:"50%"}}/>
        )
      })}
      
    </div>
  );
}

export default AlbumPhoto;
