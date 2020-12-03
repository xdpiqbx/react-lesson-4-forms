import React from 'react'; // с 17  Реакта можно не мпортировать React (если просто использую jsx)
import ReactDOM from 'react-dom';
import App from './App';

import 'modern-normalize/modern-normalize.css';
// Так (с помощю React.createElement) создаю виртуальный тег!
// const element = React.createElement('div', {prop1: 5, prop2: 15, children: ['Hello', ' ', 'React']})
// props:
//  children: (2) ["Hello", "React"]
//  prop1: 5
//  prop2: 15
//children - это то что будет вложено
// console.log(element);

//-------------------------------------------------------------------------------------
// Тут создаю два span и ложу их в div
// const elSpan1 = React.createElement('span', {className: 'div-item', children: 'Hello'})
// const elSpan2 = React.createElement('span', {className: 'div-item', children: 'React'})
// const element = React.createElement('div', {prop1: 5, prop2: 15, children: [elSpan1, ' ', elSpan2]})

// // С помощю ReactDOM.render - отрисую то что добавил в виртуальный DOM
// ReactDOM.render(element, document.querySelector('#root'))
// Всё это очень не удобно но мож дето пригодится

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//...........   JSX - более простой способ создать React.createElement  ...........\\

// const jsxElem1 = <span className="div-item">Hello </span>
// const jsxElem2 = <span className="div-item">React</span>
// const jsxElDiv = (
//         <div>
//             {jsxElem1}
//             {jsxElem2}
//         </div>
//     ) // дужки просто для удобства, без них тож работает (мож я ещё чего то не знаю)
// ReactDOM.render(jsxElDiv, document.querySelector('#root'))
// Если на странице два раза вызвать ReactDOM.render то отработает только последний вызов

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//https://youtu.be/kfX5HTQD26E?t=1781
// если у меня есть шаблончик или пример разметки

// const data = {
//     "id": "id-1",
//     "url": "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//     "title": "Feathers. Art abstract",
//     "price": 500,
//     "author": {
//       "tag": "ractapopulous",
//       "url": "https://pixabay.com/users/ractapopulous-24766/"
//     },
//     "quantity": 10
//   }

// const data = paintingsData[0]

// const html = ( // Создал виртуальный JSX елемент (Шаблон)
//   <div>
//     <img src={data.url} alt={data.title} width="480"/>
//     <h2>{data.title}</h2>
//     <p>Author <a href={data.author.url}>{data.author.tag}</a></p>
//     <p>Price: {data.price} credits</p>
//     <p>Availability: out of stock or in stock</p>
//     <button type="button">Add to cart</button>
//   </div>
// )

// ReactDOM.render(html, document.querySelector('#root')) // Зарендерил виртуальный елемент в DOM

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://youtu.be/kfX5HTQD26E?t=2341
// Компоненты!

// function Painting(props){ // Только с большой буквы!
//   const {url, title, authorUrl, authorTag, price} = props // Для удобства деструктуризирую пропс
//   return(
//     <div>
//       <img src={url} alt={title} width="480"/>
//       <h2>{title}</h2>
//       <p>Author <a href={authorUrl}>{authorTag}</a></p>
//       <p>Price: {price} credits</p>
//       <p>Availability: out of stock or in stock</p>
//       <button type="button">Add to cart</button>
//     </div>
//   )
// }

// const painting = paintingsData[1]

// ReactDOM.render(
//     <Painting
//       url={painting.url}
//       title={painting.title}
//       authorUrl={painting.author.url}
//       authorTag={painting.author.tag}
//       price={painting.price}
//     />,
//     document.querySelector('#root')
//   ) // Зарендерил виртуальный елемент в DOM

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// https://youtu.be/kfX5HTQD26E?t=3311
// Внутри index.js Рендерим App а внутри App всё остальное (Предварительно создав и описав App)
// function Painting(props) { ... } переехал в отдельную папку с компонентами
// import paintingsData from './painting.json' уехал в догонку за function Painting(props) { ... }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root'),
);
//React.StrictMode - оборачивает компонент в строгий режим

// Про SASS
//https://youtu.be/9AOISQG-GM4?t=2317
