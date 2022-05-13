import React from "react";

class CardItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        {this.props.content}
      </div>
    );
  }
}

export default CardItem;