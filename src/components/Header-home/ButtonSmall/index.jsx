
export default function ButtonSmall(props){
  return (
    <button className={props.className}>
      {props.children}
      {props.text}
    </button>
  )
}