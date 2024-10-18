import { RouterProvider } from "react-router-dom";
import { Provider } from "./Provider";
import { router } from "./router";
import "./styles/global.css";

function App() {
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
