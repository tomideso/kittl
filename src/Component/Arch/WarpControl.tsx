import { useWarp } from "./context/WarpProvider";
import "./Slider.scss";
function WarpControl() {
  const [state, setstate] = useWarp();

  return (
    <div>
      <input
        className="Slider"
        type="range"
        name="warp"
        min={state.min}
        max={state.max}
        defaultValue={state.value}
        onChange={(evt) => {
          setstate((v) => ({ ...v, value: Number(evt.target.value) }));
        }}
      ></input>
    </div>
  );
}

export default WarpControl;
