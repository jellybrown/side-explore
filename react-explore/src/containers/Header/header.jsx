import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import HeaderContext from "../../contexts/header";

const Header = () => {
  const menuRectRef = useRef();
  const [eventMenuId, setEventMenuId] = useState('home');
  const [items, setItems] = useState([
    {
      id: 1,
      domId: 'home',
      text: 'home',
      link: '/',
      active: true
    },
    {
      id: 2,
      domId: 'test',
      text: 'test',
      link: '/test',
      active: false
    },
    {
      id: 3,
      domId: 'signup',
      text: 'signup',
      link: '/signup',
      active: false
    },
    {
      id: 4,
      domId: 'login',
      text: 'login',
      link: '/login',
      active: false
    }
  ]);

  const [menuRectInfo, setMenuRectInfo] = useState({
    left: 0,
    width: 0
  });

  const moveMenuRect = () => {
    let eventElement = document.getElementById(eventMenuId);
    let eventRect = eventElement.getBoundingClientRect();
    let eventElementRect = eventElement.getBoundingClientRect();
    setMenuRectInfo({
      left: eventRect.x - eventElementRect.width / 2,
      width: eventRect.width + eventElementRect.width
    });
    setItems(
      items.map(
        item => item.domId === eventMenuId
          ? {...item, active: true}
          : {...item, active: false}));
    eventElement.style.color = 'black';
  };

  /* resize event, nav resize observer */
  useEffect(() => {
    const resizeListener = () => moveMenuRect(eventMenuId);
    window.addEventListener('resize', resizeListener);
    const resizeObserver = new ResizeObserver((entries) => moveMenuRect());
    resizeObserver.observe(document.getElementById("nav"));
    return () => window.removeEventListener('resize', resizeListener);
  }, []);

  /* eventMenuId useEffect : 메뉴 이벤트 트리거 */
  useEffect(() => {
    moveMenuRect();
    return () => {
      let eventElement = document.getElementById(eventMenuId);
      eventElement.style.color = 'white';
    }
  }, [eventMenuId]);

  const onClickHeader = (e) => {
    setEventMenuId(e.target.id);
  }

  return (
    <HeaderContext.Consumer>
      {({ headerVisible, setHeaderVisible }) => (
        headerVisible &&
        <header>
          <div
            className="menu_rectangle"
            ref={menuRectRef}
            style={{left: menuRectInfo.left, width: menuRectInfo.width}}>
          </div>
          <img className="logo" src="logo-white.png" alt="logo_photo"/>
          <nav id="nav" className="nav">
            <ul className="menu_list">
              {
                items.map(item => (
                  <li key={item.domId}>
                    <Link to={item.link} onClick={onClickHeader}>
                      <span id={item.domId} className={item.active ? 'active' : null}>{item.text}</span>
                    </Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
      )}
    </HeaderContext.Consumer>
  )
};

export default Header;
