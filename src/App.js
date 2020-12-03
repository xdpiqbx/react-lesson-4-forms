// import Painting from './components/Painting'
// import paintingsData from './painting.json';

// import PaintingList from './components/PaintingList';
// import Section from './components/Section';
// import Panel from './components/Panel';
// import Dropdown from './components/Dropdown';
// import ColorPicker from './components/ColorPicker/ColorPicker';
import { Component } from 'react';
import TodoList from './components/TodoList';
import initialTodos from '../src/todos.json';

// export default function App(){
//     return(
//         <div>
//             <Painting
//                 // imageUrl={paintingsData[0].url} // а в компоненте задал значение по умолчанию
//                 title={paintingsData[0].title}
//                 authorUrl={paintingsData[0].author.url}
//                 //authorTag={paintingsData[0].author.tag} // а в компоненте задал значение по умолчанию
//                 price={paintingsData[0].price}
//                 quantity={paintingsData[0].quantity}
//             />
//             <Painting
//                 imageUrl={paintingsData[1].url}
//                 title={paintingsData[1].title}
//                 authorUrl={paintingsData[1].author.url}
//                 authorTag={paintingsData[1].author.tag}
//                 price={paintingsData[1].price}
//                 quantity={paintingsData[1].quantity}
//             />
//             <Painting
//                 imageUrl={paintingsData[2].url}
//                 title={paintingsData[2].title}
//                 authorUrl={paintingsData[2].author.url}
//                 authorTag={paintingsData[2].author.tag}
//                 price={paintingsData[2].price}
//                 quantity={paintingsData[2].quantity}
//             />
//         </div>
//     )
// }
//---------------------------------------------------------------------------
// Рендер по условию
// для рендера по условию есть логическое И (&&) и тернарный (?:)

// export default function App(){
//     const isOnline = true
//     let res
//     return(
//         <div>
//             {isOnline && 'Online'}
//             {isOnline ? 'Online' : 'Offline'}
//         </div>
//     )
// }

//---------------------------------------------------------------------------
// Рендер Коллекций
// export default function App(){
//     return(
//         <div>
//             {[1,2,3,4,5].map(el => <div>{el}</div>)}
//         </div>
//     )
// }
// При рендере однотипных елементов нужен key для каждого (на самом верхнем уровне, теге)

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    // todos: [
    //   { "id": "id-1", "text": "Выучить основы React", "completed": true },
    //   { "id": "id-2", "text": "Разобраться с React Router", "completed": false },
    //   { "id": "id-3", "text": "Пережить Redux", "completed": false }
    // ],
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedTodoCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0,
    );
    return (
      <div>
        <p>Общее количество туду: {todos.length}</p>
        <p>Общее количество выполненых туду: {completedTodoCount}</p>
        {/* <p>Общее количество выполненых туду: {todos.filter(todo => todo.completed).length}</p> */}

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        {/* <Dropdown /> */}
        {/* <Panel title="Last News">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          </p>
        </Panel> */}
        {/* <PaintingList paintingList={paintingsData} /> */}
        {/* <Section title="ТОП недели!">
          <PaintingList paintingList={paintingsData} />{' '}
        </Section>
        <Section /> */}
      </div>
    );
  }
}

export default App;

//https://github.com/luxplanjay/react-18
//https://youtu.be/terXi4NlcoI?t=5833
