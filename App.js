const heading1 = React.createElement("h1",{key:"heading1", id:"heading1", className:"heading1", style:{backgroundColor:"blue"}},"Heading 1");
const heading2 = React.createElement("h2",{key:"heading2", id:"heading2", className:"heading2",},"Heading 2");
const container = React.createElement("div",{id:"container"},[heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);