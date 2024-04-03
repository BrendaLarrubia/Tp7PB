import CardBook from "../card/CardBook";

export default function BookList({ books }) {
  return books.map(({ author, title, cover, synopsis, ISBN }) => {
    return (
      <CardBook
        autor={author}
        nome={title}
        imagem={cover}
        sinopse={synopsis}
        key={ISBN}
      />
    );
  });
}
