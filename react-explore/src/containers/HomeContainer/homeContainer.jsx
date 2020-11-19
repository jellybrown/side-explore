import React, {useEffect} from 'react';
import ArticleList from "../../components/ArticleList/articleList";
import SubHeader from "../../components/SubHeader/subHeader";

const HomeContainer = ({setHeaderVisible}) => {
  useEffect(() => {
    setHeaderVisible(true);
  }, [setHeaderVisible]);

  return (
    <>
      <SubHeader />
      <ArticleList />
    </>
  )
};

export default HomeContainer;
