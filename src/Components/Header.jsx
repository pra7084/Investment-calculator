import image from '../assets/img.png';
import './Header.css';
const Header =()=>{
    return (
        <header id="header">
        <img src={image} alt=""/>
        <h1>INVESTMENT CALCULATOR</h1>

        </header>
    )
}
export default Header;