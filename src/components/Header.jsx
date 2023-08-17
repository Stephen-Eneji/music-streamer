import '../App.css';
import logo from '../imgs/logo.png';

function Header() {
  return (
    <div className="Header">
      <div className='Header-menu'>
      {/* Logo section */}
      <img src={logo} alt="Platform Logo" width="100px"/>
      <ul>
        <a href=""><li>Home</li></a>
        <a href=""><li>Gallery</li></a>
        <a href=""><li></li></a>
        <a href=""><li></li></a>
      </ul>
      </div>
    </div>
  );
}

export default Header;
