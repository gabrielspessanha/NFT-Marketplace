import './style.scss'


export default function Title(props){
  return (
    <>
      <h1>{props.titleH1}</h1>
      <p>{props.titleP}</p>
    </>
  )
}