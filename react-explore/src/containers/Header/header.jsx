import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import _ from 'lodash';

const Header = () => {
  const menuRectRef = useRef();
  const [eventMenuId, setEventMenuId] = useState('home');
  const [menuRectInfo, setMenuRectInfo] = useState({
    left: 0,
    width: 0
  });
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

  useEffect(() => {
    const resizeListener = () => {
      setEventMenuId('home');
    };
    window.addEventListener('resize', resizeListener);

    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);

  /* eventMenuId useEffect : 메뉴 이벤트 트리거 */
  useEffect(() => {
    if (eventMenuId !== '') {
      let eventElement = document.getElementById(eventMenuId);
      let eventRect = eventElement.getBoundingClientRect();
      setMenuRectInfo({
        left: eventRect.x - 15,
        width: eventRect.width + 30
      });
      setItems(
        items.map(
          item => item.domId === eventMenuId
            ? {...item, active: true}
            : {...item, active: false}));
      eventElement.style.color = 'black';
    }
    return () => {
      if (eventMenuId !== '') {
        let eventElement = document.getElementById(eventMenuId);
        if (eventElement !== null)
          eventElement.style.color = 'white';
      }
    }
  }, [eventMenuId]);

  const onClickHeader = (e) => {
    setEventMenuId(e.target.id);
  }

  return (
    <header>
      <div
        className="menu_rectangle"
        ref={menuRectRef}
        style={{left: menuRectInfo.left, width: menuRectInfo.width}}>
      </div>
      <img className="logo" src="logo-white.png" alt="logo_photo" />
      <nav className="nav">
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
  )
};

export default Header;
