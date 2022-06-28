
import './App.css'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import Map from './assets/img/map.png'
import Goodie from './assets/img/goodie1.png'
import PinkFace from './assets/img/red_cartoon 3.png'
import YellowFace from './assets/img/red_cartoon 4.png'

function App() {


  return (
    <div>
      <img src={YellowFace} alt=''Yellow face Image className='yellowFace'/>
      <div className='form-map'>
        <Form />
        <div className='form-image'>
          <img src={Map} alt='Map image' />
          <img src={Goodie} alt='Map image' />
          <img src={PinkFace} alt='Map image' />
        </div>
        </div>
      <Footer />
    </div>
  )
}

export default App
