import React from "react";
import TrelloRadioButton from "../../controls/TRadioButton/TrelloRadioButton";
import TrelloSubmitButton from "../../controls/TSumbitButton/TrelloSubmitButton";
import TrelloTextArea from "../../controls/TTextArea/TrelloTextArea";
import ModalTemplate from "../ModalTemplate";
import styles from "./CategoryModal.module.css";

class CategoryModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryType: null,
      categoryHeader: null,
    };

    this.validateData = this.validateData.bind(this);
    this.onRadioChangeHandler = this.onRadioChangeHandler.bind(this);
    this.textareaChangeHandler = this.textareaChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  validateData() {
    if (this.state.values.includes(null)) {
      console.log("Не пройдёшь!");
    }
  }

  onRadioChangeHandler(e) {
    this.setState({
      categoryType: e.target.value, // А НАДО ЛИ СУКА?
    });
  }

  textareaChangeHandler(e) {
    this.setState({
      categoryHeader: e.target.value,
    });
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.props.onSumbitHandler(this.state);
  }

  render() {
    return (
      <ModalTemplate>
        <div className={styles.editorContainer}>
          <h1>Creating category</h1>
          <form onSubmit={this.onSubmitHandler}>
            <div>
              <h2>Category type</h2>
              <div className={styles.typeSelectors}>
                <div className={styles.selectorsLayout}>
                  <label>Checklist</label>
                  <TrelloRadioButton
                    name="cType"
                    value="checklist"
                    onChange={this.onRadioChangeHandler}
                  />
                </div>
              </div>
              <div className={styles.typeSelectors}>
                <div className={styles.selectorsLayout}>
                  <label>Notelist</label>
                  <TrelloRadioButton
                    name="cType"
                    value="note"
                    onChange={this.onRadioChangeHandler}
                  />
                </div>
              </div>
              <div className={styles.typeSelectors}>
                <div className={styles.selectorsLayout}>
                  <label>Timetracker</label>
                  <TrelloRadioButton
                    name="cType"
                    value="timetrack"
                    onChange={this.onRadioChangeHandler}
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Category Header</h2>
              <TrelloTextArea onChange={this.textareaChangeHandler} />
            </div>
            <div>
              <TrelloSubmitButton content="Create category" />
            </div>
          </form>
        </div>
      </ModalTemplate>
    );
  }
}

export default CategoryModal;
