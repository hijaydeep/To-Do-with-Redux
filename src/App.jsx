import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import Board from "./components/Board";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<div className="p-6">Loading…</div>}
        persistor={persistor}
      >
        <Board />
      </PersistGate>
    </Provider>
  );
}

export default App;
