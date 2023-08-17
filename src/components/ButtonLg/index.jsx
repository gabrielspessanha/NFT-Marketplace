import "./styles.scss"
import Button from 'react-bootstrap/Button';

export default function ButtonLg(props){
  return (
    <Button className={`${props.className} buttonLgStandard`} href={props.link}>
      {props.children}
    </Button>
  )
}