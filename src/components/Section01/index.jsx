import Heroimg from "../../assets/section01/hero-animation01.gif";
import { RocketTakeoff } from "react-bootstrap-icons";
import MediumCard from "./MediumCard";
import Numbers from "./Numbers";
import Title from "../Title";
import Button from 'react-bootstrap/Button';
import styles from "./styles.module.scss";



export default function Section01() {
  return (
    <div className={styles.section01}>
      <Title className={styles.titleSection01}
        titleH1="Descubra arte digital de colecionar NFTs"
        titleP="compre e venda arte de mais de 20 mil artistas de NFTs."
      />
      <MediumCard classMediumCard={styles.mediumCard} Heroimg={Heroimg}/>
      <div className={styles.buttonGetstart}>
        <Button className={`${styles.buttonLg}`} href="#">
          <RocketTakeoff className="me-2 bg-transparent rocket" size={20} />
          Iniciar
        </Button>
      </div>
      <Numbers className={styles.numbersSection01} />
    </div>
  );
}
