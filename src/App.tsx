import "./App.css";
import WarpContainer from "./Component/Arch/WarpContainer";
import Button from "./Component/Button/Button";
import { Badge } from "./Component/Icons";

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
    icon: false,
    caret: true,
  },
  {
    theme: "primary",
    icon: true,
    caret: false,
  },
  {
    theme: "secondary",
    icon: false,
    caret: false,
  },
  {
    theme: "secondary",
    icon: false,
    caret: true,
  },
  {
    theme: "secondary",
    icon: true,
    caret: false,
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
                  <Button text="Button" icon={icon ? <Badge /> : null} theme={theme} caret={caret} disabled></Button>
                </td>
                <td>
                  <Button text="Button" icon={icon ? <Badge /> : null} theme={theme} caret={caret}></Button>
                </td>
                <td>
                  <Button
                    text="Button"
                    className={`btn-${theme}-hover`}
                    icon={icon ? <Badge /> : null}
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
        <Button text="Button" theme="primary"></Button>
        <Button text="Button" theme="secondary"></Button>
        <Button text="Button" icon={<Badge />} theme="secondary" caret={true}></Button>
        <Button text="Button" icon={<Badge />} theme="secondary" caret={true} disabled></Button>
      </div>

      <WarpContainer />
    </>
  );
}

export default App;
