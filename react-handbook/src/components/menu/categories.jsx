/* eslint react/prop-types: 0 */
import React, { PureComponent } from 'react';
import Category from './category';
import './categoryStyle.css';

class Categories extends PureComponent {
  render() {
    const { categories } = this.props;
    return (
      <>
        <ul>
          {categories.map((category) => (

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
// `${item.category_name}`
// categories.map((item) => console.log(item))
export default Categories;
