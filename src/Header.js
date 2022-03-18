import React from 'react'
import './Header.css';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className='header'>
      <Link to = "/">
        <img className='header__image' src = "https://freesvg.org/img/hotpopcornmovie.png"/>
        </Link>
        <input type='text' className='header__input' placeholder = "search the movies"></input>
        <button className='header__search__button'>Search</button>
        <div className='header__right'>
        <Link to = "/">
        <HomeIcon className='header__home__icon' fontSize='large'/>
        </Link>
            <select className = 'header__select' name = "select_region" id = "region">
                <option value = "coimbatore">Coimbatore</option>
                <option value = "chennai">Chennai</option>
                <option value = "bangalore">Bangalore</option>
            </select>
            <Link to = "/login">
            <button className='header__button'>Sign in</button>
            </Link>
          </div>
    </div>
  )
}

export default Header