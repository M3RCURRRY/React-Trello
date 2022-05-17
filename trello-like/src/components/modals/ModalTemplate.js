import React from "react";
import styles from "./ModalTemplate.module.css";

class ModalTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={styles.modalBackground}>
        <div className={styles.modalField}>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default ModalTemplate;