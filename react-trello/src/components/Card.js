import React from "react";
import styles from "../modules/Card.module.css";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.editNameHandler = this.editNameHandler.bind(this);

    this.state = {
      cardName: this.props.cardName,
      cardContent: this.props.cardContent,
    };
  }

  submitHandler(e) {
    console.log("submited");
    e.preventDefault();
  }

  editNameHandler() {
    const name = prompt("Enter new name", "");
    this.setState({
      cardName: name,
    });
  }

  render() {
    return (
      <div className={styles.Card}>
        <button onClick={this.props.toggleModalHandler}>Edit card</button>
        <button onClick={() => this.props.removeHandler(this.props.cardKey)}>
          Remove card
        </button>
        <p id="card" onClick={this.editNameHandler}>{this.state.cardName}</p>
      </div>
    );
  }
}

export default Card;
