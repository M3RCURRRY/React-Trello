import React from "react";
import styles from "./Card.module.css";
import Note from "./Note/Note";
import Timetracker from "./Timetracker/Timetracker";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cardItems: [this.props.content],
    };
  }

  render() {
    return (
      <div className={styles.card}>
        <p className={styles.cardHeader}>{this.props.header}</p>
        <div className={styles.limiter}></div>
        {
          this.state.cardItems.map((cardItem) => {
            switch(cardItem) {
              case "note":
                return <Note />
              case "checklist":
                console.log("This item does not exists!");
                return 1;
              case "timetracker":
                console.log("Timetracker does not exists!");
                return <Timetracker />;
              default:
                console.log("Default case");
            }
          })
        }
      </div>
    );
  }
}

export default Card;
