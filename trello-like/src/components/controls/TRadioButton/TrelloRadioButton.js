import React from "react";
import styles from "./TrelloRadioButton.module.css";

class TrelloRadioButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <input
        className={styles.radioButton}
        type="radio"
        name={this.props.name}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}

export default TrelloRadioButton;
