import React from "react";
import styles from "./TrelloButton.module.css";

class TrelloButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button className={styles.TButton} onClick={this.props.onClickHandler}>
        {this.props.content}
      </button>
    );
  }
}

export default TrelloButton;
