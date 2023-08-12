export default function SmallCards(props){
  return(
    <div className={props.className}>
      <div>
        <img src={props.miniImgCard01} />
      </div>
      <div>
        <img src={props.miniImgCard02} />
      </div>
      {props.children}
      
    </div>
  )
}