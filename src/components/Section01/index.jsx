
import './style.scss'
import  Heroimg from '../../assets/section01/hero-animation01.gif'
import rocketVetor from '../../assets/section01/RocketLaunch.png'


export default function Section01() {
  return (
    <div className='container section01 pt-5 px-4'>
      <h1>Descubra arte digital e colecionar NFTs</h1>
      <p>compre e venda arte de mais de 20 mil artistas de NFTs.</p>
      <div>
        <img className='heroImg-section01' src={Heroimg} />
      </div>
      
      <button className='iniciar'>Iniciar</button>

      <div className='numbers'>
        <div>
          <h2>240k+</h2>
          <span>Venda total</span>
        </div>

        <div>
          <h2>100k+</h2>
          <span>Leilões</span>
        </div>

        <div>
          <h2>240k+</h2>
          <span>Artists</span>
        </div>
        
      </div>

    </div>
  )
}