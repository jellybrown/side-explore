import React from 'react';
import ArticleList from "../../components/ArticleList/articleList";
import SubHeader from "../../components/SubHeader/subHeader";
import styles from './homeContainer.module.css';

const HomeContainer = () => {
  return (
    <>
      <SubHeader />
      <div className={styles.container}>
        <ArticleList />
      </div>
    </>
  )
};

export default HomeContainer;
