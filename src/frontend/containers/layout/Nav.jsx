import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import anime from '../../utils/anime.js';
import NavItem from '../../components/NavItem';
import Title from '../../components/Title';
import Menu from '../../assets/static/menu.png';

const Nav = () => {

  const [state, setState] = useState({
    active: false,
    page: 'Blog', // in what page is the user, initially on home
  });

  // function to active or deactivate the sidenav
  const activeMenu = (active) => {
    if (!active) {
      anime({
        targets: '.sidenav',
        translateX: -250,
        easing: 'easeInOutQuad',
      });
    } else {
      anime({
        targets: '.sidenav',
        translateX: 250,
        easing: 'easeInOutQuad',
      });
    }
    // alter the state
    setState({ active: !state.active});
  }
  return (
    <nav className="row">
      <div className="nav-logo">
        <Link to="/">
          <Title content="IMECBLOG" class="logo"/>
        </Link>
      </div>
  
      {/* NAVBAR FOR LARGE AND MEDIAN SCREENS */}

      <div className="nav-items hide-on-small-only">
        <NavItem to='/' class="nav-item" content="Inicio" 
        click={() => setState({page: 'Inicio'})} active={state.page=='Inicio'} 
        />
        <NavItem to='/blog' class="nav-item" content="Blog" 
        click={() => setState({page: 'Blog'})} active={state.page=='Blog'} 
        />
        <NavItem to='/recursos' class="nav-item" content="Recursos" 
        click={() => setState({page: 'Recursos'})} active={state.page=='Recursos'} 
        />
        <NavItem to='/foro' class="nav-item" content="Foro" 
        click={() => setState({page: 'Foro'})} active={state.page=='Foro'} 
        />
        <NavItem to='/acerca' class="nav-item" content="Acerca" 
        click={() => setState({page: 'Acerca'})} active={state.page=='Acerca'} 
        />
        <NavItem to='/perfil' class="nav-item" content="Perfil" 
        click={() => setState({page: 'Perfil'})} active={state.page=='Perfil'} 
        />
      </div>

      {/* MENU BUTTON FOR SMALL SCREENS */}

      <div className="nav-items hide-on-med-and-up">
        <img src={Menu} alt="Menu" className="menu"
        onClick={() => activeMenu(state.active)}/>
      </div>
      
      {/* SIDENAV FOR SMALL SCREENS */}
      
      <div className="sidenav hide-on-med-and-up">
        <NavItem to='/' class="sidenav-item" content="Inicio" 
        click={() => activeMenu(state.active)} active={state.page=='Inicio'} 
        />
        <NavItem to='/blog' class="sidenav-item" content="Blog" 
        click={() => activeMenu(state.active)} active={state.page=='Blog'} 
        />
        <NavItem to='/recursos' class="sidenav-item" content="Recursos" 
        click={() => activeMenu(state.active)} active={state.page=='Recursos'} 
        />
        <NavItem to='/foro' class="sidenav-item" content="Foro" 
        click={() => activeMenu(state.active)} active={state.page=='Foro'} 
        />
        <NavItem to='/acerca' class="sidenav-item" content="Acerca" 
        click={() => activeMenu(state.active)} active={state.page=='Acerca'} 
        />
        <NavItem to='/perfil' class="sidenav-item" content="Perfil" 
        click={() => activeMenu(state.active)} active={state.page=='Perfil'} 
        />
      </div>
    </nav>
  );
};

export default Nav;