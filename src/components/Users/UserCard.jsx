import { useEffect, useState  } from "react";

const UserCard = ({user}) => {
    const{name, skin_color, gender, vehicles, hair_color } = user;
    const [backgroundColor, setBackgroundColor] = useState("#ffffff");

    const hairColorMap = {
      brown: "#8B4513",
      black: "#000000",
      blond: "#FFD700",
      'brown, grey': "#3D3635",
      'auburn, white': "#A55C5C",
    };

    useEffect(() =>{
      setBackgroundColor(hairColorMap[hair_color] || "#ffffff");
    }, [hair_color])
    
  return (
    <div className={`card card-compact w-96 shadow-xl`} style={{backgroundColor}}>
      <figure>
        <img
          src="https://picsum.photos/400/300"
          alt=""
        />
      </figure>
      <div className={`card-body text-lg 
      ${hair_color=='brown'? 'text-white': ''} 
      ${hair_color=='black'? 'text-white': ''}
      ${hair_color=='brown, grey'? 'text-white': ''}
      ${hair_color=='auburn, white'? 'text-white': ''}`}>
        <h2 className="text-xl">Name: <span className="font-bold">{name}</span> </h2>
        <p>Skin Color: <span className="uppercase font-bold">{skin_color}</span></p>
        <p>Hair Color: <span className="uppercase font-bold">{hair_color}</span></p>
        <p>Gender: <span className="uppercase font-bold">{gender}</span></p>
        <p>Vehicles: <span className="uppercase font-bold">{vehicles.length}</span></p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
