import React, {useEffect} from 'react';
import ArticleList from "../../components/ArticleList/articleList";
import SubHeader from "../../components/SubHeader/subHeader";
import styles from './homeContainer.module.css';

const HomeContainer = ({setHeaderVisible}) => {
  useEffect(() => {
    setHeaderVisible(true);
  }, [setHeaderVisible]);

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
