import React from 'react'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import {CardMedia} from "@material-ui/core";
import transitions from "@material-ui/core/styles/transitions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: '100%'
  },
  parent: {
    overflow: 'hidden',
    '&:hover': {
      '& > div': {
        backgroundColor: 'rgba(0,0,0,0.8)',
      },
      '& > img': {
        transform: 'scale(1.5)',
      },
      '& > div > div': {
        color: 'white'
      }
    }
  },
  image: {
    display: 'block',
    width: '100%',
    height: '100%',
    transition: '1s',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    transition: '.5s ease',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  text: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 20,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center'
  }
}));

const BigArticle = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  return(
    <div className={classes.root}>
      { props.article ? (
        <Link to={"article" + "/" + props.article.fields.title}>
          <div className={classes.parent}>
            <img
              className={classes.image}
              src={props.article.fields.articleImage.fields.file.url}
            />
            <div className={classes.overlay}>
              <div className={classes.text}>
                {props.article.fields.title}
              </div>
            </div>
          </div>
        </Link>
      ): null }
    </div>
  )
}

export default BigArticle;
