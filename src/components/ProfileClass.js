import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      userInfo: {
        name: "dummy",
        location: "USA",
      },
    };

    console.log("Child Constructor " + this.props.name);
  }

  // async componentDidMount() {
  //   const data = await fetch("https://api.github.com/users/irshadhussain");
  //   const json = await data.json();
  //   console.log(json);
  //   this.setState({ userInfo: json });
  //   console.log("child componentDidMount " + this.props.name);
  // }

  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
    }
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child render " + this.props.name);
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url} />
        <h2>Name: {this.state.userInfo.name}</h2>
        <h2>Location: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
