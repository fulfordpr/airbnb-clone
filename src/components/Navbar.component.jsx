import logo from '../imgs/pngegg.png'
import './Navbar.styles.css'
const Navbar = () =>{
    return(
    <nav>
        <img src={logo} alt="logo" className="logo"/>
        <h3>airbnb</h3>
    </nav>
    )
}

export default Navbar