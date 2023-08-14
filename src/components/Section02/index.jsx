
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

/* ------------imagens do Card 3---------------- */
import Heroimg03 from "../../assets/section02/section0203/primaryPhoto03.png";
import SegundaryPhoto03 from "../../assets/section02/section0203/secondPhoto03.png"
import ThirdPhoto03 from "../../assets/section02/section0203/thirdPhoto03.png"
import Avatar03 from "../../assets/section02/section0203/avatar03.png"



import Title from "../Title";
import Card from "./Card";
import styles from "./styles.module.scss";

export default function Section02() {
  return (
    <div className={styles.section02}>
      <Title className={styles.titleSection02}
          titleH1="Coleção de Tendências"
          titleP="Confira nossa coleção de tendências atualizada semanalmente."
        />
      <Card
        Avatar={Avatar01}
        classCard={styles.card01}
        classImgLg={styles.heroImgLg}
        classButton={styles.buttonNumberSection02}
        classImgSmall={styles.smallCardsSection02}
        Heroimg={Heroimg01}
        nick={"MrFox"}
        paragraph={"DSGN Animals"}
        SegundaryPhoto={SegundaryPhoto01}
        ThirdPhoto={ThirdPhoto01}
        textButton={"1025+"}
        />

      <Card
        Avatar={Avatar02}
        classCard={styles.card02}
        classImgLg={styles.heroImgLg}
        classActived={styles.isActived}
        classButton={styles.buttonNumberSection02}
        classImgSmall={styles.smallCardsSection02}
        Heroimg={Heroimg02}
        nick={"Shroomie"}
        paragraph={"DSGN Animals"}
        SegundaryPhoto={SegundaryPhoto02}
        ThirdPhoto={ThirdPhoto02}
        textButton={"6+"}
        />

      <Card
        Avatar={Avatar03}
        classCard={styles.card03}
        classImgLg={styles.heroImgLg}
        classActived={styles.isActived}
        classButton={styles.buttonNumberSection02}
        classImgSmall={styles.smallCardsSection02}
        Heroimg={Heroimg03}
        nick={"Gabiru2robots"}
        paragraph={"Disco Machines"}
        SegundaryPhoto={SegundaryPhoto03}
        ThirdPhoto={ThirdPhoto03}
        textButton={"1025+"}
        />
        
    </div> 
  );
}
