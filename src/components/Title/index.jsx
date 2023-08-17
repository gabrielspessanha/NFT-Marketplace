import './style.scss'

export default function Title(props){
  return (
    <div className={`title container ${props.className}`}>
      <h2>{props.titleH1}</h2>
      <p>{props.titleP}</p>
      {props.children}
    </div>
  )
}