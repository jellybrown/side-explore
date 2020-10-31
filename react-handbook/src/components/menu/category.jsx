/* eslint react/prop-types: 0 */
import React, { PureComponent } from 'react';

class Category extends PureComponent {
  render() {
    const { category } = this.props;

    return (
      <>
        <li className="detail_category">
          <a href="#a">{category.category_name}</a>
          <ul>
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
