import React from 'react';
import '../../assets/styles/components/Footer.scss';
import instagram from '../../assets/static/icons/instagram.png';
import twitter from '../../assets/static/icons/twitter.png';
import facebook from '../../assets/static/icons/facebook.png';
import youtube from '../../assets/static/icons/youtube.png';
import github from '../../assets/static/icons/github.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Footer = props => {
  return (
    <footer className="row">
      
      <div className="footer-1 col l3 m4 offset-m1 s12"> 
        <h2>IMECBLOG</h2>
        <p>Compartiendo ideas, proyectos tecnológicos innovadores y mucho más con nuestra comunidad estudiantil</p>
      </div>
      
      <div className="footer-2 col l3 offset-l1 m4 offset-m2 s12">
        <h2>Síguenos</h2>
        <div className="row footer-media">
          <div className="footer-media-item">
            <img src={instagram} alt="instagram"/>
          </div>
          <div className="footer-media-item">
            <img src={twitter} alt="twitter"/>
          </div>
          <div className="footer-media-item">
            <img src={facebook} alt="facebook"/>
          </div>
          <div className="footer-media-item">
            <img src={github} alt="github"/>
          </div>
          <div className="footer-media-item">
            <img src={youtube} alt="youtube"/>
          </div>
        </div>
        <p>Y no te pierdas de nada!</p>
      </div>

      <div className="footer-3 col offset-l1 l4 m6 offset-m3 s12">
        <h2>Suscríbete</h2>
        <p>Deja aquí tu correo electrónico</p>
        <div className="div">
          <Input text="Email"/>
          <Button content="Suscríbete" />
        </div>
      </div>

    </footer>
  );
}

export default Footer;