
export default function ButtonLg(props){
  return (
    <button className={props.className}>
      {props.children}
      {props.text}
    </button>
  )
}