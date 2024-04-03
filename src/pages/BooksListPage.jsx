import { useEffect, useState } from "react";
import BookList from "../components/bookList/BookList";
import style from "./BooksListPage.module.css";

export default function BooksListpage() {
  const url =
    "https://t3t4-dfe-pb-grl-m1-default-rtdb.firebaseio.com/books.json";
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [filter, setFilter] = useState({
    title: "",
    author: "",
    genre: "",
  });

  async function request() {
    const response = await fetch(url);
    const bookList = Object.values(await response.json());
    setBooks(bookList);
    setFilteredBooks(bookList);
  }

  useEffect(() => {
    request().catch(() => {
      console.log("dados não encontrado");
    });
  }, []);

  useEffect(() => {
    const filtered = books.filter((book) => {
      return (
        book.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        book.author.toLowerCase().includes(filter.author.toLowerCase()) &&
        book.genre.toLowerCase().includes(filter.genre.toLowerCase())
      );
    });
    setFilteredBooks(filtered);
  }, [books, filter]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <>
      <div className={style.filterControls}>
        <input
          type="text"
          name="title"
          placeholder="Filtrar por título"
          value={filter.title}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Filtrar por autor"
          value={filter.author}
          onChange={handleFilterChange}
        />
        <select name="genre" value={filter.genre} onChange={handleFilterChange}>
          <option value="">Todas as categorias</option>
          <option value="Ficção">Ficção</option>
          <option value="Fantasia">Fantasia</option>
          <option value="Romance">Romance</option>
        </select>
      </div>
      <div className={style.cards}>
        <BookList books={filteredBooks} />
      </div>
    </>
  );
}
