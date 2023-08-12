import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header-home';
import Section01 from './components/Section01'
import Section02 from './components/Section02';

function App() {
  return (
    <>
    <div className='container app'>
      <Header />
      <Section01 />
      <Section02 />
    </div>
    </>
  )
}

export default App
