import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import Article from '../Article/article'
import BigArticle from '../Article/bigArticle'
import articleDummy from '../../dummy/articles';

class ArticleList extends Component {
  state = {
    articles: [],
    searchString: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: articleDummy
    }
  }

  render() {
    return (
      <div>
        {this.state.articles ? (
          <div>
            <Grid container style={{padding: '5% 10%'}}>
              {
                this.state.articles.map((currentArticle) => (

                  currentArticle.key === 0 ?
                    <li key={currentArticle.key} style={{width: '100%'}}>
                      <Grid item key={currentArticle.key} style={{padding: 30}} xs={12}>
                        <BigArticle article={currentArticle} />
                      </Grid>
                    </li>
                    :
                    <Grid item key={currentArticle.key} style={{padding: 35}} xs={12} sm={6} lg={6} xl={6}>
                      <Article article={currentArticle} />
                    </Grid>
                ))
              }
            </Grid>
          </div>
        ) : "No articles found" }
      </div>
    )
  }
}
export default ArticleList;
