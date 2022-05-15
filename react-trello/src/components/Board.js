import React from "react";
import Card from "./Card";
import styles from "../modules/Board.module.css";
import CardEdit from "./modals/CardEdit";

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.cardData = [];

    this.state = {
      cardNumber: 0,
      isCardModalOpened: false,
    };

    this.createCardHandler = this.createCardHandler.bind(this);
    this.removeCardHandler = this.removeCardHandler.bind(this);
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
  }

  toggleModalHandler() {
    this.setState((prev) => ({
      isCardModalOpened: !prev.isCardModalOpened,
    }));
  }

  createCardHandler() {
    console.log("Creating new card");
    this.cardData.push({
      cardKey: `card_${this.state.cardNumber}`,
      cardName: `Card ${this.state.cardNumber}`,
    });

    this.setState((prev) => ({
      cardNumber: prev.cardNumber + 1,
    }));
  }

  removeCardHandler(cardKey) {
    let newCardData = [];
    this.cardData.map((item) => {
      console.log(item);
      if (item.cardKey !== cardKey) {
        newCardData.push(item);
      }
      else {
        console.log(`Removed : ${item.cardKey}`);
      }
    })

    this.cardData = newCardData;

    this.setState((prev) => ({
      cardNumber: prev.cardNumber - 1,
    }));
  }

  render() {
    return (
      <div className={styles.Board}>
        {this.state.isCardModalOpened && <CardEdit toggleModalHandler={this.toggleModalHandler}/>}
        Board instance
        <button onClick={this.createCardHandler}>Create new card</button>
        <div className={styles.cardContainer}>
          {this.cardData.map((item) => {
            return (
              <Card
                key={item.cardKey}
                cardKey={item.cardKey}
                cardName={item.cardName}
                removeHandler={this.removeCardHandler}
                toggleModalHandler={this.toggleModalHandler}
              />
            );
          })}
        </div>
      </div>
    );  
  }
}

export default Board;
