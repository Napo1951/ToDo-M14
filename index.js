function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Sunday Morning going to Mass',
      isCompleted: false,
    },
    {
      text: 'Breakfast With Mom and Dad',
      isCompleted: false,
    },
    {
      text: 'Soccer Game Premier League',
      isCompleted: false,
    }, 
    {
      text: 'Soccer Game Liga Santander',
      isCompleted: false,
    },       
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }

  return(
    <div className="app">
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
