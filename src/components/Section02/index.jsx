
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
        
    </div>
  );
}
