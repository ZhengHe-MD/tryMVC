import { List, ListItem } from 'material-ui/List';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import { connect } from 'react-redux';

class CommentBox extends React.Component {
  render() {
    const {
      id,
      comment,
      username,
      thumbnail
    } = this.props.commentObject;
    const style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    return (
      <ListItem>
        <div style={style}>
          <div>
            <Avatar src={thumbnail} className="avatar" />
            {username}
            <div>
              {comment}
            </div>
          </div>
          <FlatButton
            label="Delete"
            secondary={true}
            onClick={() => this.props.onDeleteComment(id )}
          />
        </div>
      </ListItem>

    )
  }
}

CommentBox.props = {
  commentObject: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteComment: (id) => {
      dispatch({ type: 'DEL_COMMENT', id });
    }
  }
}



export default connect(null, mapDispatchToProps)(CommentBox);
