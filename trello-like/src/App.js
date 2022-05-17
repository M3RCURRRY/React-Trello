import styles from "./App.module.css";
import TrelloButton from "./components/controls/TButton/TrelloButton";
import React from "react";
import CategoryModal from "./components/modals/CategoryModal/CategoryModal";
import CardBoard from "./components/layout/CardBoard/CardBoard";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCategorModalOpen: false,
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
  }

  render() {
    return (
        <div className={styles.App}>
          {this.state.isCategorModalOpen && <CategoryModal onSumbitHandler={this.submitCategoryCreationHandler}/>}
          <header className={styles.AppHeader}>
            <h1>React Trello-like App</h1>
            <TrelloButton
              content="Create new category"
              onClickHandler={this.toggleCategoryHandler}
            />
            <TrelloButton content="Edit category's preset" />
            <TrelloButton content="Not done yet" />
          </header>
          <CardBoard />
        </div>
    );
  }
}

export default App;
