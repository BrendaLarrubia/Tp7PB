import "./App.css";
import Menu from "./components/menu/Menu";
import BooksListpage from "./pages/BooksListPage";

export default function App() {
  return (
    <>
      <Menu />
      <div>
        <BooksListpage />
      </div>
    </>
  );
}
