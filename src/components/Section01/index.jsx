import "./style.scss";
import Heroimg from "../../assets/section01/hero-animation01.gif";
import MediumCard from "./MediumCard";
import ButtonLg from "./ButtonLg";
import Numbers from "./Numbers";
import Title from "../Title";

import { RocketTakeoff } from "react-bootstrap-icons";

export default function Section01() {
  return (
    <div className="container section01  pt-4 px-4">
      <Title
        titleH1="Descubra arte digital e colecionar NFTs"
        titleP="compre e venda arte de mais de 20 mil artistas de NFTs."
      />
      <MediumCard Heroimg={Heroimg}/>
      <ButtonLg>
        <RocketTakeoff className="me-2 bg-transparent" size={20} />
        Iniciar
      </ButtonLg>
      <Numbers />
    </div>
  );
}
