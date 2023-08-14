




export default function Creators(props){
  return (
    <div className={`${props.className} ${props.isActived}`}>
      <p className={props.positionClass}>{props.position}</p>
      <img src={props.src} alt={`perfil-${props.name}`}/>
      <div className={props.texts}>
        <h3>{props.name}</h3>
        <span>Total Sales: </span>
        <span><strong className="bg-transparent">{props.numberSales} ETH</strong></span>
      </div>
      
    </div>
  ) 
}