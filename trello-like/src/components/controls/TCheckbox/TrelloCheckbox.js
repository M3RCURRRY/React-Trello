import React from "react";
import styles from "./TrelloCheckbox.module.css";

class TrelloCheckbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <input type="checkbox" onChange={this.props.onChange} className={styles.checkBox}/>
    )
  }
}

export default TrelloCheckbox;