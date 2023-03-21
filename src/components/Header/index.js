import Content from './Content';
import NavBar from './Menu';
import './style.scss';

function Header() {
  return (
    <div className="Header">
    <NavBar/>
    <Content/>
    </div>
  );
}

export default Header;
