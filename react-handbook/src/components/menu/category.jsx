/* eslint react/prop-types: 0 */
import React, { PureComponent } from 'react';

class Category extends PureComponent {
  render() {
    const { category, onClick } = this.props;
    return (
      <>
        <li className="detail_category">
          <a href="#a" className="category_title" data-id={category.id - 1} onClick={onClick}>{category.category_name}</a>
          <ul className="category_list">
            {category && category.child_menu.map((item) => (
              <li key={item.id}>
                <a href="#a">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </li>

      </>
    );
  }
}
// category.child_menu[0].title
export default Category;
