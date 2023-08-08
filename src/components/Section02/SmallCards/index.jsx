import ButtonLg from '../ButtonLg'
import './style.scss'


export default function SmallCards(props){
  return(
    <div className="miniCards">
      <div>
        <img src={props.miniImgCard01} />
      </div>
      <div>
        <img src={props.miniImgCard02} />
      </div>
      <ButtonLg>1025+</ButtonLg>
    </div>
  )
}