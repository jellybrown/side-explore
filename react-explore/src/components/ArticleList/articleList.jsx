import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Article from '../Article/article'

class ArticleList extends Component {
  state = {
    articles: [],
    searchString: ''
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          key: 0,
          fields: {
            title: '오늘의 자바스크립트 (2020.11.12)',
            description: 'javascript study',
            url: 'login',
            articleImage: {
              fields: {
                file: {
                  url: 'https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg'
                }
              }
            }
          }
        },
        {
          key: 1,
          fields: {
            title: '오늘의 자바스크립트 (2020.11.11)',
            description: 'javascript version',
            url: 'login',
            articleImage: {
              fields: {
                file: {
                  url: 'https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg'
                }
              }
            }
          }
        },
        {
          key: 2,
          fields: {
            title: '오늘의 자바스크립트 (2020.11.10)',
            description: '자바스크립트로 개발하기',
            url: 'login',
            articleImage: {
              fields: {
                file: {
                  url: 'https://www.ionos.com/digitalguide/fileadmin/DigitalGuide/Teaser/webentwicklung-t.jpg'
                }
              }
            }
          }
        }
      ]
    }
  }

  render() {
    return (
      <div>
        {this.state.articles ? (
          <div>
            <Grid container style={{padding: 40}}>
              { this.state.articles.map(currentArticle => (
                <Grid item key={currentArticle.key} style={{padding: 20}} xs={12} sm={12} lg={6} xl={6}>
                  <Article article={currentArticle} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No articles found" }
      </div>
    )
  }
}
export default ArticleList;
