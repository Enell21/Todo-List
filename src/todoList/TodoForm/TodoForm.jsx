import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TodoForm() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/myList', { state: { title, description } });
  }
  return (
    <>
      <form>
        <div>
          <label>
            Title:
            <input
              type='text'
              name='title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter your Title'
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name='description'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              placeholder='Enter your Todo description'
            />
          </label>
        </div>
        <div>
          <button type='submit' onClick={handleSubmit}>
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
}

export default TodoForm;
