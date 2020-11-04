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
    };
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

  render() {
    const { menu } = this.state;
    return (
      <>
        <Categories
          categories={menu}
          onClick={this.onClickCategory}
        />
        <Contents />
      </>
    );
  }
}

export default App;
