import {Provider} from "react-redux";
import {store} from "./redux/store.js";
import {TodoList} from "./TodoList.jsx";

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  )
}

export default App
