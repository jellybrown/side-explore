import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import './article.css'

const Article = (props) => {

  return(
    <div>
      { props.article ? (
        <Link to={"article/" + props.article.fields.title}>
          <Card style={{
            border: "none",
            borderRadius: '10px',
            boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
            padding: '1.5em',
            transition: '0.7s'
          }} className="card">
            <CardMedia style={{height: 0, paddingTop: '60%'}}
                       image={props.article.fields.articleImage.fields.file.url}
                       title={props.article.fields.title}
            />
            <CardContent>
              <Typography gutterBottom style={{fontSize: '1.2rem'}}>
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
