export default function MediumCard(props){
  return (<img style={{
    maxWidth: "100%",
    marginBottom: "2rem"
  }} className={props.classMediumCard}  alt="HeroImg" src={props.Heroimg} />)
}