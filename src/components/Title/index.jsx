import './style.scss'

export default function Title(props){
  return (
    <div className={`title ${props.className}`}>
      <h1>{props.titleH1}</h1>
      <p>{props.titleP}</p>
    </div>
  )
}