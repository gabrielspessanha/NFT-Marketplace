import "./style.scss";
import Heroimg from "../../assets/section02/primaryPhoto.png";
import SegundaryPhoto from "../../assets/section02/SecondPhoto.png"
import ThirdPhoto from "../../assets/section02/ThirdPhoto.png"
import Avatar from "../../assets/section02/AvatarPhoto.png"

import MediumCard from "./MediumCard";
import Title from "./Title";
import SmallCards from "./SmallCards";



export default function Section02() {
  return (
    <>
    <div className="container section02 pt-4 px-4">
      <Title
        titleH1="Coleção de Tendências"
        titleP="Confira nossa coleção de tendências atualizada semanalmente."
      />
      <MediumCard Heroimg={Heroimg} />
      <SmallCards
       miniImgCard01={SegundaryPhoto}
       miniImgCard02={ThirdPhoto}
        />
      <div className="avatar-Section02">
        <p>Dsgn Animals</p>
        <img src={Avatar} alt="Avatar" />
        <span>MrFox</span>
      </div>
      
    </div>
    
    </>
  );
}
