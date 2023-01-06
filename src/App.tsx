import "./App.css";
import WarpContainer from "./Component/Arch/WarpContainer";
import Button from "./Component/Button/Button";

const storyBook: Array<{
  theme: "primary" | "secondary";
  icon: boolean;
  caret: boolean;
}> = [
  {
    theme: "primary",
    icon: false,
    caret: false,
  },
  {
    theme: "primary",
    icon: true,
    caret: false,
  },
  {
    theme: "primary",
    icon: true,
    caret: true,
  },
  {
    theme: "secondary",
    icon: true,
    caret: true,
  },
  {
    theme: "secondary",
    icon: true,
    caret: false,
  },
  {
    theme: "secondary",
    icon: true,
    caret: true,
  },
];

function App() {
  return (
    <>
      <table className="tm-table">
        <thead>
          <tr>
            <th></th>
            <th>Disabled</th>
            <th>Idle</th>
            <th>Hovered</th>
          </tr>
        </thead>
        <tbody>
          {storyBook.map(({ theme, icon, caret }, i) => {
            const suffix = icon ? "Icon" : caret ? "Caret" : "";
            return (
              <tr key={i}>
                <td>
                  {theme} Button {suffix ? `(With ${suffix})` : ""}
                </td>
                <td>
                  <Button text="Button" icon={"bi:bookmark"} theme={theme} caret={caret} disabled></Button>
                </td>
                <td>
                  <Button text="Button" icon={"bi:bookmark"} theme={theme} caret={caret}></Button>
                </td>
                <td>
                  <Button
                    text="Button"
                    className={`btn-${theme}-hover`}
                    icon={"bi:bookmark"}
                    theme={theme}
                    caret={caret}
                  ></Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="App">
        <Button text="Button" theme="primary" caret={true}></Button>
        <Button text="Button" theme="secondary" caret={true}></Button>
        <Button text="Button" icon={"bi:bookmark"} theme="secondary" caret={true}></Button>
        <Button text="Button" icon={"bi:bookmark"} theme="secondary" caret={true} disabled></Button>
      </div>

      <WarpContainer />
    </>
  );
}

export default App;
