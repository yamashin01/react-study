import "./App.css";
import { CssModules } from "./components/CssModules";
import { InlineStyle } from "./components/InlineStyles";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";

function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
    </div>
  );
}

export default App;
