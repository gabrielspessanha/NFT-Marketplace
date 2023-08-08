import MediumCard from "../MediumCard";
import SmallCards from "../SmallCards";
import ButtonLg from '../ButtonLg'

export default function Card(props){
  return (
    <div className="container card01-section02 pt-4 px-4">
        <MediumCard Heroimg={props.Heroimg} />
        <SmallCards
          miniImgCard01={props.SegundaryPhoto}
          miniImgCard02={props.ThirdPhoto}
        ><ButtonLg>{props.textButton}</ButtonLg> </SmallCards>
        <div className="avatar-Section02">
          <p>{props.paragraph}</p>
          <img src={props.Avatar} alt="Avatar" />
          <span>{props.nick}</span>
        </div> 
      </div>
  )
}