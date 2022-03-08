import React from "react";

import styles from "./Countdown.module.css";

type Props = {
  message: string;
  moment: number;
};

type State = {
  display: string;
};

export default class Countdown extends React.Component<Props, State> {
  state: State = { display: "" };

  componentDidMount(): void {
    let startDate = this.props.moment;

    const interval = setInterval((): void => {
      const currentTime = new Date().getTime();

      const remainingTime = startDate - currentTime;

      const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      let displayDays = days ? `${days} days,` : "";

      const hours = (
        "0" +
        Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2);

      const minutes = (
        "0" + Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2);

      const seconds = (
        "0" + Math.floor((remainingTime % (1000 * 60)) / 1000)
      ).slice(-2);

      this.setState({
        display: `${displayDays} ${hours}:${minutes}:${seconds}`,
      });

      if (remainingTime < 0) {
        clearInterval(interval);
        this.setState({
          display: this.props.message,
        });
      }
    }, 1000);
  }

  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.counter}>{this.state.display}</div>
      </div>
    );
  }
}
