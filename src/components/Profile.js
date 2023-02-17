import { useState, useEffect } from "react";
const Profile = (props) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);
  console.log("render functional component");

  useEffect(() => {
    //API Call
    console.log("useEffect");
    const timer = setInterval(() => {
      console.log("Namaste React OP");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("useEffect return");
    };
  }, [count]);

  // useEffect(() => {
  //   //API Call
  //   console.log("useEffect");
  // }, [count2]);

  console.log("render");
  return (
    <div>
      <h1>Profile Component</h1>
      <h2>Name - {props.name}</h2>
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Counter
      </button>
    </div>
  );
};

export default Profile;
