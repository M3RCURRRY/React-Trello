import React from "react";
import styles from "./TrelloSubmitButton.module.css";

class TrelloSubmitButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <input type="submit" value={this.props.content} className={styles.styledInput}/>
    );
  }
}

export default TrelloSubmitButton;