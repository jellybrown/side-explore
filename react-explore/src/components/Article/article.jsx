import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";

const Article = (props) => {

  return(
    <div>
      { props.article ? (
        <Link to={"login"}>
          <Card>
            <CardMedia style={{height: 0, paddingTop: '20%'}}
                       image={props.article.fields.articleImage.fields.file.url}
                       title={props.article.fields.title}
            />
            <CardContent style={{background: '#dfdfdf'}}>
              <Typography gutterBottom component="h2">
                {props.article.fields.title}
              </Typography>
              <Typography component="p">
                {props.article.fields.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ): null }
    </div>
  )
}

export default Article;
