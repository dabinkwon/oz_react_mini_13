import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Layout from "../component/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/details/:movieId" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
