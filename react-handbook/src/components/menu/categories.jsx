import React, { PureComponent } from 'react';
import Category from './category';
import categoryStyle from  './components/menu/';

class Categories extends PureComponent {
  render() {
    return (
      <>
        <ul>
          {this.props.categories.map((category) => (
            <Category
              key={category.id}
              category={category}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Categories;
