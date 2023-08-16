import Title from "../Title"
import Creators from "./Creators"
import styles from "./styles.module.scss"

import { RocketTakeoff } from "react-bootstrap-icons";

import avatar01 from "../../assets/section03/avatars_section03/avatar01.png"
import avatar02 from "../../assets/section03/avatars_section03/avatar02.png"
import avatar03 from "../../assets/section03/avatars_section03/avatar03.png"
import avatar04 from "../../assets/section03/avatars_section03/avatar04.png"
import avatar05 from "../../assets/section03/avatars_section03/avatar05.png"
import avatar06 from "../../assets/section03/avatars_section03/avatar06.png"
import avatar07 from "../../assets/section03/avatars_section03/avatar07.png"
import avatar08 from "../../assets/section03/avatars_section03/avatar08.png"
import avatar09 from "../../assets/section03/avatars_section03/avatar09.png"
import avatar10 from "../../assets/section03/avatars_section03/avatar10.png"
import avatar11 from "../../assets/section03/avatars_section03/avatar11.png"
import avatar12 from "../../assets/section03/avatars_section03/avatar12.png"
import Button from 'react-bootstrap/Button';


export default function Section03(){
  return(
    <div className={styles.section03}>
      <Title className={styles.titleSection03}
        titleH1="Top Criadores"
        titleP="Confira os criadores com melhor classificação no mercado NFT"/>
      <div className={styles.creators}>
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar01}
          name={"GravityOne"}
          position={"1"}
          numberSales={"34.53"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar02}
          name={"Keepitreal"}
          position={"2"}
          numberSales={"32.12"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar03}
          name={"DigiLab"}
          position={"3"}
          numberSales={"28.98"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar04}
          name={"Gabrielle"}
          position={"4"}
          numberSales={"25.30"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar05}
          name={"Ninjadin"}
          position={"5"}
          numberSales={"22.22"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          texts={styles.textsClass}
          src={avatar06}
          name={"AnimaKid"}
          position={"6"}
          numberSales={"19.28"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar07}
          name={"Mr Fox"}
          position={"7"}
          numberSales={"19.00"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar08}
          name={"Robotica"}
          position={"8"}
          numberSales={"18.88"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar09}
          name={"Shroomie"}
          position={"9"}
          numberSales={"18.00"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar10}
          name={"Hayo Miyazaki"}
          position={"10"}
          numberSales={"17.77"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar11}
          name={"Dotgu"}
          position={"11"}
          numberSales={"17.00"}
        />
        <Creators
          className={styles.creators_Item}
          positionClass={styles.position}
          isActived={styles.isActived}
          texts={styles.textsClass}
          src={avatar12}
          name={"Rustyrobot"}
          position={"12"}
          numberSales={"16.84"}
        />
      </div>
      <div className={styles.buttonRankings}>
        <Button className={`${styles.buttonLg} mt-4`} href="#">
          <RocketTakeoff className="me-2 bg-transparent rocket" size={20} />
          Visualizar rankings
        </Button>
      </div>
      
    </div>
  )
}