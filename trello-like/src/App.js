import styles from "./App.module.css";
import TrelloButton from "./components/controls/TButton/TrelloButton";
import React from "react";
import CategoryModal from "./components/modals/CategoryModal/CategoryModal";
import CardBoard from "./components/layout/CardBoard/CardBoard";
import Card from "./components/layout/Card/Card";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.lastCardID = 0;

    this.state = {
      isCategorModalOpen: false,
      cardData: [],
    };

    this.toggleCategoryHandler = this.toggleCategoryHandler.bind(this);
    this.submitCategoryCreationHandler =
      this.submitCategoryCreationHandler.bind(this);
  }

  toggleCategoryHandler() {
    this.setState((prev) => ({
      isCategorModalOpen: !prev.isCategorModalOpen,
    }));
  }

  submitCategoryCreationHandler(data) {
    console.log(data);
    this.toggleCategoryHandler();

    let tmp = this.state.cardData;
    tmp.push(data);
    this.setState({
      cardData: tmp,
    });
    console.log(this.state.cardData);
  }

  render() {
    return (
      <div className={styles.App}>
        {this.state.isCategorModalOpen && (
          <CategoryModal onSumbitHandler={this.submitCategoryCreationHandler} />
        )}
        <header className={styles.AppHeader}>
          <h1>React Trello-like App</h1>
          <TrelloButton
            content="Create new category"
            onClickHandler={this.toggleCategoryHandler}
          />
          <TrelloButton content="Edit category's preset" />
          <TrelloButton content="Not done yet" />
        </header>
        <CardBoard>
          {this.state.cardData.map((item, index) => {
            return (
              <Card
                key={index}
                header={item.categoryHeader}
                content={item.categoryType}
              />
            );
          })}
        </CardBoard>
      </div>
    );
  }
}

export default App;
