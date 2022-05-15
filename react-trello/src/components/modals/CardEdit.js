import React from "react";
import styles from "./CardEdit.module.css";

class CardEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      textValue: "",
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  componentDidMount() {
    this.modalResult = {
      itemType: null,
    };
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if (!this.modalResult.itemType) {
      console.log("Choose any type of new card item!");
    } else {
      this.props.toggleModalHandler();
    }
    console.log(this.modalResult);
  }

  onChangeHandler(e) {
    switch (e.target.name) {
      case "itemchoise":
        this.modalResult.itemType = e.target.value;
        break;
      default:
        console.log("Шо?!");
        break;
    }
    // this.setState({
    //   textValue: e.target.value,
    // });
  }

  render() {
    return (
      <div className={styles.CardEdit}>
        <div className={styles.editForm}>
          <form onSubmit={this.onSubmitHandler}>
            Edit menu
            <div className={styles.itemSelection}>
              <div className={styles.radioContainer}>
                <label className="selectionLabel">Note item</label>
                <input
                  type="radio"
                  value="note"
                  name="itemchoise"
                  onChange={this.onChangeHandler}
                />
              </div>

              <div className={styles.radioContainer}>
                <label className="selectionLabel">Checklist item</label>
                <input
                  type="radio"
                  value="checklist"
                  name="itemchoise"
                  onChange={this.onChangeHandler}
                />
              </div>
            </div>
            <div className={styles.optionalSection}>
              <label className="headerLabel">Create item with header</label>
              <input
                type="checkbox"
                value="isHeaderReq"
                name="headercheck"
              />
            </div>
            <input
              type="submit"
              onSubmit={this.onSubmitHandler}
              value="Submit changes"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default CardEdit;