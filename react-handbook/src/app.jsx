import Categories from 'components/menu/categories';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [
        {
          id: 1,
          category_name: '1111111',
          child_menu: [
            { id: 1, title: '1소메뉴1' },
            { id: 2, title: '1소메뉴2' },
            { id: 3, title: '1소메뉴3' },
            { id: 4, title: '1소메뉴4' },
            { id: 5, title: '1소메뉴5' },
          ],
        },
        {
          id: 2,
          category_name: '222222',
          child_menu: [
            { id: 1, title: '2소메뉴1' },
            { id: 2, title: '2소메뉴2' },
            { id: 3, title: '2소메뉴3' },
            { id: 4, title: '2소메뉴4' },
            { id: 5, title: '2소메뉴5' },
          ],
        },
        {
          id: 3,
          category_name: '33333',
          child_menu: [
            { id: 1, title: '3소메뉴1' },
            { id: 2, title: '3소메뉴2' },
            { id: 3, title: '3소메뉴3' },
            { id: 4, title: '3소메뉴4' },
            { id: 5, title: '3소메뉴5' },
          ],
        },
        {
          id: 4,
          category_name: '4444444',
          child_menu: [
            { id: 1, title: '4소메뉴1' },
            { id: 2, title: '4소메뉴2' },
            { id: 3, title: '4소메뉴3' },
            { id: 4, title: '4소메뉴4' },
            { id: 5, title: '4소메뉴5' },
          ],
        },
      ],

    };
  }

  render() {
    const { menu } = this.state;
    return (
      <>
        <Categories categories={menu} />
      </>
    );
  }
}

export default App;
