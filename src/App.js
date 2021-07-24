import "./App.css";
import ColoredUserPic from "./components/coloredUserPic";
import Avatar from "./avatar.png"

function App() {
  return (
    <div className="App">
      <ColoredUserPic
        src={Avatar}
        size={150}
        margin={4}
        backgroundColor="red"
        colors={["green", "blue"]}
        hoverColors={["blue", "green"]}
        colorWidth={6}
      />
    </div>
  );
}

export default App;
