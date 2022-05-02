import { Provider } from "react-redux";
import Contador from "./components/Contador";
import TeoriaRedux from "./components/TeoriaRedux";
import ShoppingCart from "./components/ShoppingCart";
import store from "./store";
import CrudApi from "./components/CrudAPI";
function App() {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <h2>Exercice: cRUD API Redux</h2>
        <CrudApi />
        <hr />
        <h2>Exercice: Shopping Redux</h2>
        <ShoppingCart />
        <hr />
        <h2>Exercice: Counter Redux</h2>
        <Contador />
        <hr />
        <h1>Teory Redux</h1>
        <hr />
        <TeoriaRedux />
      </div>
    </Provider>
  );
}

export default App;
