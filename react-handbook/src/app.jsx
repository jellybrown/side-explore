import React, { Component } from 'react';
import Categories from 'components/menu/categories';

class App extends Component {
  state = {
    data: [
      { id: 1, categoryName: '대메뉴1' },
      { id: 2, categoryName: '대메뉴2' },
      { id: 3, categoryName: '대메뉴3' },
    ],
  };

  render() {
    return (
      <>
        <Categories
          categories={this.state.data}
        />
      </>
    );
  }
}

export default App;
