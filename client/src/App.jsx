import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
