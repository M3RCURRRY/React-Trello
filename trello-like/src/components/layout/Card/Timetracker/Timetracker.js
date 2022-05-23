import React from "react";
import TrelloCheckbox from "../../../controls/TCheckbox/TrelloCheckbox";
import styles from "./Timetracker.module.css";

class Timetracker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemsCounter: 0,
      checkItems: [],
    };

    this.addTimestampHandler = this.addTimestampHandler.bind(this);
    this.markTimestampHandler = this.markTimestampHandler.bind(this);
  }

  markTimestampHandler() {

  }

  addTimestampHandler() {
    const timestampName = prompt("Enter new timestamp name", "");
    const newItem = (
      <li key={this.state.itemsCounter} className={styles.listItem}>
        {timestampName}
        <TrelloCheckbox
          onChange={() => this.markTimestampHandler(this.state.itemsCounter)}
        />
      </li>
    );
    let newList = [];
    if (this.state.checkItems.length != 0) {
      newList = this.state.checkItems;
    }
    newList.push(newItem);
    this.setState((prev) => ({
      checkItems: newList,
      itemsCounter: prev.itemsCounter + 1,
    }));
  }

  render() {
    return (
      <div className={styles.timetrackerContainer}>
        <ul>
          {this.state.checkItems.map((item) => {
            return item;
          })}
        </ul>
        <button onClick={this.addTimestampHandler}>Add timestamp</button>
      </div>
    );
  }
}

export default Timetracker;
