import AddNewTask from './components/addNewTask/AddNewTask';
import Main from './components/Main';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <div className="App ml-24 font-monospace tracking-normal">
      <Sidebar />
      <Header />
      <hr />
      <AddNewTask />
      <Main />
    </div>
  );
}

export default App;
