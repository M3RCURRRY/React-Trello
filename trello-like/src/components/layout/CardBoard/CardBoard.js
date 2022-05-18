import React from "react";
import styles from "./CardBoard.module.css";

class CardBoard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.boardClass}>
        {this.props.children}
      </div>
    )
  }
}

export default CardBoard;