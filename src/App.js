import { useContext } from "react";
import Categories from "./components/Categories";
import Header from "./components/Header";
import Shorts from "./components/Shorts";
import Sidebar from "./components/Sidebar";
import Posts from "./components/Posts";
import AppContext from "./context/AppContext";
function App() {
  const { sidebarControl } = useContext(AppContext);
  const mainAreaClass = sidebarControl ? "main-area" : "main-area wide";
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={mainAreaClass}>
        <Categories />
        <Posts />
        <Shorts />
        <Posts />
      </div>
    </div>
  );
}

export default App;
