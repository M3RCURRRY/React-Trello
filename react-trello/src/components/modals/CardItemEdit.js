import React from "react";
import styles from "./CardItemEdit.module.css";

class CardItemEdit extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.CardItemEdit}>
        <p>Sample text</p>
      </div>
    );
  }
}

export default CardItemEdit;