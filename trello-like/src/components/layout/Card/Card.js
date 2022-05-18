import React from "react";
import styles from "./Card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.card}>
        <p>{this.props.header}</p>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;