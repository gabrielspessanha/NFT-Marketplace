import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Numbers(props){
  return (
    <div className={props.className}>
        <Row>
          <Col>
            <h5>240k+</h5>
            <span>Vendas</span>
          </Col>
          
          <Col>
            <h5>100k+</h5>
            <span>Leilões</span>
          </Col>

          <Col>
            <h5>50k+</h5>
            <span>Artistas</span>
          </Col>

        </Row>
        
      </div>
  )
}