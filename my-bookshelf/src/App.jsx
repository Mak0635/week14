import BookCard from './components/BookCard';



const book = [
  { id: 1, title: '涙のねこ', author: 'ゴンザレス松本', rating: '4', comment: '最高に面白い本でした。'},
  { id: 2, title: '汗のトラ ', author: 'Yui Ishitani', rating: '5', comment: 'みんなにも読んでもらいたい作品です。'},
  { id: 3, title: '知のヘビ ', author: '眠りひめ', rating: '3', comment: '新人られないくらい腹を抱えた笑いました。'},
]

function App() {
  return (
  <main className = "bg-green-200"> 
    <h1 className= "text-2xl font-bold text-center text-cyan-300">書籍紹介ページ</h1>
    {book.map((book) => (
      <BookCard
        key={book.id}
          title={book.title}
          author={book.author}
          rating={book.rating}
          comment={book.comment}
        />
      ))}
</main>
    );
  }

export default App;
