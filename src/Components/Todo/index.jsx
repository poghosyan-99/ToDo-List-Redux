import { useDispatch, useSelector } from 'react-redux';

import { addTodoItemAction, selectTodos, checkTodoItemAction, deleteTodoItemAction } from '../../Store/Slices/ToDos/toDosSlice';
import { inputValueAction, selectText, selectResetText } from '../../Store/Slices/Text/textSlice';
import { actionEditItemValue, selectEditItem } from '../../Store/Slices/EditItem/editItemSlice';
import './style.css';

const Todo = () => {

  const todos = useSelector(selectTodos);
  const text = useSelector(selectText);
  const editItem = useSelector(selectEditItem);
  const resetText = useSelector(selectResetText);
  console.log(resetText);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodoItemAction(text));
    dispatch(inputValueAction(selectResetText));
  }

    return(
      <div className="ToDos">
        <div className="Todo">
          <h1>TODO LIST</h1>
          <div className='AddTodo'>
            <form onSubmit={handleFormSubmit}>
              <input 
                type="text" 
                placeholder="Add ToDo..." 
                value={text} 
                onChange={(e) => dispatch(inputValueAction(e.target.value))}
              />
              <button type="submit">{editItem ? 'Edit' : 'Add'}</button>
            </form>
          </div>

          {todos && todos.map((todo, index) => {
            return(
              <div key={todo.id}>
                <div className='taskBg'>
                  <div className={todo.isCompleted ? 'done' : ''}>
                    <span className='number'>{index + 1}</span>
                    <span className='task'>{todo.title}</span>
                  </div>
                  <div className='iconsDiv'>
                    <i className="fa-solid fa-pencil" onClick={() => {
                        dispatch(actionEditItemValue(todo))
                      }}>
                    </i>
                    <i className="fas fa-check" onClick={() => {dispatch(checkTodoItemAction(todo.id))}}></i>
                    <i className="fas fa-trash" onClick={() => {dispatch(deleteTodoItemAction(todo.id))}}></i>
                  </div>
                </div>
              </div>
            )
           })}
        </div>
      </div>
    );
}

export default Todo;