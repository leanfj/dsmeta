import imageHeader from "../../assets/img/image-header.png";
import "./styles.css";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={imageHeader} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.instagram.com/devsuperior.ig">@devsuperior.ig</a>
        </p>
      </div>
    </header>
  );
}

export default Header;
