import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Layout from "../component/Layout";
import { MovieProvider } from "../context/MovieContext";
import Search from "../pages/Search";

function App() {
  

  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/search/movie" element={<Search />} />
          <Route path="/details/:movieId" element={<Detail />} />
        </Route>
      </Routes>
    </MovieProvider>
  );
}

export default App;
