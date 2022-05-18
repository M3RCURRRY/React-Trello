import React from "react";
import styles from "./Note.module.css";

class Note extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.noteContainer}>
        1
      </div>
    )
  }
}

export default Note;