import MediumCard from "../MediumCard";
import SmallCards from "../SmallCards";
import ButtonLg from '../ButtonLg';

export default function Card(props){
  return (
    <div className={`${props.classCard} ${props.classActived}`}>
        <MediumCard className={props.classImgLg} Heroimg={props.Heroimg} />
        <SmallCards className={props.classImgSmall}
          miniImgCard01={props.SegundaryPhoto}
          miniImgCard02={props.ThirdPhoto}
        ><ButtonLg className=
          {props.classButton}>
          {props.textButton}
          </ButtonLg></SmallCards>
        <div>
          <p>{props.paragraph}</p>
          <img src={props.Avatar} alt="Avatar" />
          <span>{props.nick}</span>
        </div> 
      </div>
  )
}