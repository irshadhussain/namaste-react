import React from "react";
import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import Profile from "./ProfileClass";
// About = () => {
//   return (
//     <div className="about">
//       <h1>About Us</h1>
//       <p>This is Namaste React Live course</p>
//       <ProfileFunctionalComponent name={"Irshad"} />
//       <Profile name={"Irshad"} />
//     </div>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent componentDidMount");
  }

  render() {
    //console.log("Parent render");
    return (
      <div className="about">
        <h1>About Us</h1>
        <p>This is Namaste React Live course</p>
        <ProfileFunctionalComponent name={"Irshad"} />
        {/* <Profile name={"First child"} /> */}
      </div>
    );
  }
}

export default About;
