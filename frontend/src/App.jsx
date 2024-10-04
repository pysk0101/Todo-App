import "./App.css";

import Header from "./components/Header";
import AddTask from "./components/list/listComponents/AddTask";
import List from "./components/list/List";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className={` min-h-[100svh] flex flex-col justify-between bg-main `}>
        <Header />
        <div className={"mt-16 p-2 h-full "}>
          <AddTask />
          <List />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
