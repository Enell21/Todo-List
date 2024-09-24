import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <main>
        <h1>Welcome to the Home Page!</h1>
      </main>
      <button>
        <Link to='/addTodo'>Add Todo</Link>
      </button>
    </>
  );
}

export default Home;
