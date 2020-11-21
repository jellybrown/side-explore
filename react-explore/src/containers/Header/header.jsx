import React, {useState, useEffect, useRef} from 'react';
import { Link, Router } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  const menuRectRef = useRef();
  const [eventMenuId, setEventMenuId] = useState('home');
  const [menuRectInfo, setMenuRectInfo] = useState({
    left: 0,
    width: 0
  });
  const [menuSelectToggle, setMenuSelectToggle] = useState(false);
  const [items, setItems] = useState([
    {
      domId: 'home',
      text: 'home',
      link: '/',
      active: true
    },
    {
      domId: 'test',
      text: 'test',
      link: '/test',
      active: false
    },
    {
      domId: 'signup',
      text: 'signup',
      link: '/signup',
      active: false
    },
    {
      domId: 'login',
      text: 'login',
      link: '/login',
      active: false
    }
  ]);

  useEffect(() => {
    console.log('items 값이 변경됨.');
    items.map(
      item => item.active == true
        && console.log('변경 후', item)
    );

    return () => {
      console.log('items 값이 변경되기 전.');
      items.map(
        item => item.active == true
          && console.log('변경 전', item)
      );
    };
  }, [items]);

  useEffect(() => {
    console.log('useEffect-eventMenuId');
    if (eventMenuId != '') {
      let eventElement = document.getElementById(eventMenuId);
      let eventRect = eventElement.getBoundingClientRect();
      console.log(eventRect.width);
      console.log(eventRect.x);
      setMenuRectInfo({
        left: eventRect.x - 15,
        width: eventRect.width + 30
      });
      setMenuSelectToggle(!menuSelectToggle);
      setItems(
        items.map(
          item => item.domId == eventMenuId
            ? {...item, active: true}
            : {...item, active: false}));
      eventElement.style.color = 'black';
    }
    return () => {
      if (eventMenuId != '') {
        let eventElement = document.getElementById(eventMenuId);
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
      <img className="logo" src="project-logo1.png" alt="logo" />
      <nav className="nav">
        <ul className="menu_list">
          {
            items.map(item => (
              <li>
                <Link to={item.link} onClick={onClickHeader}>
                  <span id={item.domId} className={item.active && 'active'}>{item.text}</span>
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
