import React from 'react';
import ArticleList from "../../components/ArticleList/articleList";
import SubHeader from "../../components/SubHeader/subHeader";

const HomeContainer = (props) => {
  return (
    <>
      <SubHeader />
      <ArticleList />
    </>
  )
};

export default HomeContainer;
