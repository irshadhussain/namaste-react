import { createElement } from "react";
import ReactDOM from "react-dom/client";

// const heading1 = createElement(
//   "h1",
//   {
//     key: "heading1",
//     id: "heading1",
//     className: "heading1",
//     style: { backgroundColor: "blue" },
//   },
//   "Heading 1 from parcel"
// );
// const heading2 = createElement(
//   "h2",
//   { key: "heading2", id: "heading2", className: "heading2" },
//   "Heading 2"
// );
// const container = createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

// const heading = (
//   <h1 id="title" key="h2">
//     Namaste React
//   </h1>
// );

const Title = () => (
  <h1 id="title" key="h1">
    Namaste React
  </h1>
);

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2>Namaste React from functional component </h2>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);
