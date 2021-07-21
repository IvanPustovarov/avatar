import "./App.css";
import ColoredUserPic from "./components/coloredUserPic";
import Avatar from "./avatar.png"

function App() {
  return (
    <div className="App">
      <ColoredUserPic
        src={Avatar} //done
        size={150} //done
        margin={4}
        backgroundColor="red" //done
        colors={["green", "blue"]}
        hoverColors={["blue", "green"]} //d
        colorWidth={6}
      />
    </div>
  );
}

export default App;
