import style from './Footer.module.css'
import GreenFace from '../../assets/img/Group 80.png'
import PinkFace from '../../assets/img/red_cartoon 3.png'
import Pinterest from '../../assets/img/Vector(9).png'
import Facebook from '../../assets/img/Vector(10).png'
import Twitter from '../../assets/img/Vector(11).png'
import Linkedin from '../../assets/img/Vector(12).png'
import YellowFace from '../../assets/img/red_cartoon 4.png'

export default function Footer() {
  return (
    <footer>
        <div className={style.pinkFaceDiv}>
          <img src={PinkFace} alt="" className={style.pinkFace}/>
        </div>
        <div className={style.socialMedia}>
        <img src={Linkedin} alt="" />
        <img src={Twitter} alt="" />
        <img src={Facebook} alt="" />
        <img src={Pinterest} alt="" />
        </div>
        <img src={GreenFace} alt=""  className={style.greenFace}/>
        <img src={YellowFace} alt="" className={style.footerYellowFace} />
    </footer>
  )
}
