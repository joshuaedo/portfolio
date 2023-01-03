import "./App.css";
import CoverPhoto from "./components/CoverPhoto/CoverPhoto.jsx";
import Header from "./components/Header/Header.jsx";
import Comment from "./components/Comment/Comment.jsx";

function App() {
  return (
    <div className="App">
      <CoverPhoto />
      <Header />
      <Comment />
    </div>
  );
}

export default App;
