import React from 'react';
import './subHeader.css';

const SubHeader = (props) => {
  return (
    <section className="subHeader">
      <img className="logo" src="project-logo1.png" alt="logo" />
      <span>스터디 내용을 정리하기 위한 블로그입니다.</span>
    </section>
  )
};

export default SubHeader;
