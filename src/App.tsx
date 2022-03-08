import React from "react";
import Countdown from "./components/Countdown/Countdown";

export default class App extends React.Component {
  state = {
    setEndDay: new Date(
      `${new Date().getFullYear()}-${("0" + (new Date().getMonth() + 1)).slice(
        -2
      )}-${("0" + new Date().getDate()).slice(-2)}T23:59:59`
    ).getTime(),
    mssgEndDay: "The day has ended",
    setEndYear: new Date(
      `${new Date().getFullYear()}-12-31T23:59:59`
    ).getTime(),
    mssgEndYear: "The year has ended",
  };

  render() {
    return (
      <div>
        <Countdown
          message={this.state.mssgEndDay}
          moment={this.state.setEndDay}
        />
        <Countdown
          message={this.state.mssgEndYear}
          moment={this.state.setEndYear}
        />
      </div>
    );
  }
}
