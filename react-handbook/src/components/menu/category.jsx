import React, { PureComponent } from 'react';

class Category extends PureComponent {
  render() {
    return (
      <>
        <li className="detail_category">
          <a href="#a">{this.props.category.categoryName}</a>
        </li>
      </>
    );
  }
}

export default Category;
