import Contents from 'components/contents/contents';
import Categories from 'components/menu/categories';
import React, { Component } from 'react';
import './app.css';
import menuData from 'api/menu';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menuData,
      toggleState: 0,
    };
  }

  componentDidUpdate() {
    const { toggleState } = this.state;
    const contentsBody = document.querySelector('.root_body');
    console.log('contentsBody offectWidth : ', contentsBody.offsetWidth);
    console.log('toggleState : ', toggleState);
    contentsBody.style.transition = '0.2s';
    contentsBody.style.marginLeft = `-${toggleState}px`;
    contentsBody.style.width = `calc(100% + ${toggleState}px)`;
  }

  onClickCategory = (e) => {
    e.stopPropagation();

    const clickThis = e.target;
    const act = clickThis.className === 'category_title'
      ? 'category_title active'
      : 'category_title';
    clickThis.setAttribute('class', act);
    const index = clickThis.dataset.id;
    const categoryInner = document.querySelectorAll('.category_list');
    const down = categoryInner[index].className === 'category_list' ? 'category_list active' : 'category_list';
    categoryInner[index].setAttribute('class', down);
  };

  onClickToggle = (e) => {
    e.stopPropagation();
    const menu = document.querySelector('.menu_list');
    console.log(menu);
    const menuWidth = menu.offsetWidth;
    const { toggleState } = this.state;
    if (toggleState === 0) {
      this.setState({
        toggleState: menuWidth,
      });
    } else {
      this.setState({
        toggleState: 0,
      });
    }
  }

  render() {
    const { menu } = this.state;
    return (
      <div className="root_body">
        <Categories
          categories={menu}
          onClick={this.onClickCategory}

        />
        <Contents
          onToggle={this.onClickToggle}
        />
      </div>
    );
  }
}

export default App;
