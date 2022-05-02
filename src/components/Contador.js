import { useDispatch, useSelector } from "react-redux";
import {
  sumar,
  sumar_5,
  reset,
  restar,
  restar_5,
} from "../actions/contadorActions";
const Contador = () => {
  const state = useSelector((state) => state);
  const dispacht = useDispatch();
  return (
    <div>
      <h4>Counter Redux</h4>
      <nav>
        <button onClick={() => dispacht(sumar_5())}>+5</button>
        <button onClick={() => dispacht(sumar())}>+1</button>
        <button onClick={() => dispacht(reset())}>0</button>
        <button onClick={() => dispacht(restar())}>-1</button>
        <button onClick={() => dispacht(restar_5())}>-5</button>
      </nav>
      <h3>{state.contador}</h3>
    </div>
  );
};

export default Contador;
