
/* ------------imagens do Card 1---------------- */
import Heroimg01 from "../../assets/section02/primaryPhoto.png";
import SegundaryPhoto01 from "../../assets/section02/SecondPhoto.png"
import ThirdPhoto01 from "../../assets/section02/ThirdPhoto.png"
import Avatar01 from "../../assets/section02/AvatarPhoto.png"

/* ------------imagens do Card 2---------------- */
import Heroimg02 from "../../assets/section02/primaryPhoto02.png";
import SegundaryPhoto02 from "../../assets/section02/secondPhoto02.png"
import ThirdPhoto02 from "../../assets/section02/third02Photo.png"
import Avatar02 from "../../assets/section02/Avatar02.png"


import Title from "../Title";
import Card from "./Card";
import "./style.scss";

export default function Section02() {
  return (
    <div className="container section02 ">
      <Title
          titleH1="Coleção de Tendências"
          titleP="Confira nossa coleção de tendências atualizada semanalmente."
        />
      <Card
        Heroimg={Heroimg01}
        SegundaryPhoto={SegundaryPhoto01}
        ThirdPhoto={ThirdPhoto01} 
        paragraph={"DSGN Animals"}
        Avatar={Avatar01}
        nick={"MrFox"}
        />

      <Card
        Heroimg={Heroimg02}
        SegundaryPhoto={SegundaryPhoto02}
        ThirdPhoto={ThirdPhoto02}
        paragraph={"DSGN Animals"}
        Avatar={Avatar02}
        nick={"Shroomie"}
        />
        
    </div>
  );
}
