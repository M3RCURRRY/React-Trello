import React from "react";
import styles from "./TrelloTextArea.module.css";

class TrelloTextArea extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <textarea className={styles.textArea} onChange={this.props.onChange}/>
    )
  }
}

export default TrelloTextArea;