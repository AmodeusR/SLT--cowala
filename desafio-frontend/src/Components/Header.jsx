import logo from "../img/logo.png";
import cowalaSoftware from "../img/cowala-software.png";

const Header = () => {
  
  return (
    <header className="header">
      <div className="container header">
        <img src={logo} alt="Logo Cowala" />
        <img className="text-logo" src={cowalaSoftware} alt="Cowala Software" />
      </div>
      
    </header>
  );
}

export default Header;
 