import React from "react";
import styles from "./Note.module.css";

class Note extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      noteContent: "Empty",
    }

    this.editNoteHandler = this.editNoteHandler.bind(this);
  }

  editNoteHandler() {
    const result = prompt("Enter new content", "");
    this.setState({
      noteContent: result,
    });
  }

  render() {
    return(
      <div className={styles.noteContainer} onClick={this.editNoteHandler}>
        {this.state.noteContent}
      </div>
    )
  }
}

export default Note;