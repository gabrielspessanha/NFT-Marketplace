import MediumCard from "../MediumCard";
import SmallCards from "../SmallCards";

export default function Card(props){
  return (
    <div className="container card01-section02 pt-4 px-4">
        <MediumCard Heroimg={props.Heroimg} />
        <SmallCards
          miniImgCard01={props.SegundaryPhoto}
          miniImgCard02={props.ThirdPhoto}
          />
        <div className="avatar-Section02">
          <p>{props.paragraph}</p>
          <img src={props.Avatar} alt="Avatar" />
          <span>{props.nick}</span>
        </div> 
      </div>
  )
}