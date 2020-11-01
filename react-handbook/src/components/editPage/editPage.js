import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Editor } from '@toast-ui/react-editor';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import './editPage.css';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const style = () => ({
  root: {
    '& label.Mui-focused': {
      color: 'black',
    },
    height: '100vh',
  },
  editPageTitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 40px',
    padding: '20px 0 0 0',
    fontFamily: '"Nanum Brush Script", cursive',
    fontSize: '3.5em',
    color: 'rgba(0, 0, 0, 0.7)',
  },
  divider: {
    display: 'block',
    margin: '5px 0',
  },
  field: {
    margin: '5px 5px',
  },
  button: {
    '&:hover': {
      boxShadow: 'none',
    },
    width: '96px',
    backgroundColor: 'rgba(0, 0, 0, 0.03)',
    color: 'rgba(0, 0, 0, 0.7)',
    fontWeight: 'bold',
    boxShadow: 'none',
    marginLeft: '90%',
    transform: 'translateY(-10px)',
  },
  inputUpload: {
    display: 'none',
  },
  leftIcon: {
    marginRight: '10px',
  },
  rightIcon: {
    marginLeft: '5px',
  },
  iconSmall: {
    fontSize: 20,
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: '5px',
    minWidth: 200,
  },
  MuiInput: {
    '&:after': {
      borderBottom: '2px solid #111',
    },
  },
  Mui: {
    focused: {
      color: 'red',
    },
  },
  topContainer: {
  },
});

class EditPage extends Component {
  constructor() {
    super();
    this.topContainerRef = React.createRef();
    this.editorRef = React.createRef();
    this.state = {
    };
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  handleClick = () => {
    // eslint-disable-next-line
    console.log(this.editorRef.current.getInstance().getHtml());
  }

  handleResize = () => {
    const topContainer = document.querySelector(`.${this.topContainerRef.current.className}`);
    const editorObj = document.querySelector('.tui-editor-defaultUI');
    editorObj.style.height = `${window.innerHeight - topContainer.clientHeight}px`;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.topContainer} ref={this.topContainerRef}>
          <span className={classes.editPageTitle}>공들여 쓰자</span>
          <div className={classes.titleContainer}>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-input" className={classes.Mui}>분류</InputLabel>
              <Input id="category-input" className={classes.MuiInput} />
              <FormHelperText>분류를 정해주세요.</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="name-input">글 제목</InputLabel>
              <Input id="title-input" className={classes.MuiInput} />
              <FormHelperText>글 제목을 정해주세요.</FormHelperText>
            </FormControl>
          </div>
          {/* eslint-disable-next-line react/button-has-type */}
          <Button
            className={classes.button}
            variant="contained"
            size="small"
            onClick={this.handleClick}
          >
            저장
          </Button>
        </div>
        <Editor
          previewStyle="vertical"
          height="50%"
          initialEditType="markdown"
          initialValue="# 안녕하세요."
          ref={this.editorRef}
        />
      </div>
    );
  }
}

EditPage.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(style)(EditPage);
