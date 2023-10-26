import React, { Component } from "react";
import Header from "./Header";
import AdDesigner from "./AdDesigner";
import Votes from "./Votes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlavor: "Vanilla",
      isDarkTheme: false,
      fontSize: 16,
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AdDesigner
          selectedFlavor={this.state.selectedFlavor}
          isDarkTheme={this.state.isDarkTheme}
          fontSize={this.state.fontSize}
        />
        <Votes />
      </div>
    );
  }
}

export default App;
