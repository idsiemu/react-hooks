import React, { useEffect, useState } from 'react';
import useInput from './useInput';
import useTabs from './useTabs';
import useTitle from './useTitle';
import styled from 'styled-components'

const content = [
  {
    tab:"탭 1",
    content:"탭 1 내용 부분"
  },
  {
    tab:"탭 2",
    content:"탭 2 내용 부분"
  }
];

const Input = styled.input`
  width:100%
`;
const Number = (init) => {
  const [number, setNumber] = useState(init);
  const plus = () => {
    setNumber(number + 1);
  }
  const minus = () => {
    setNumber(number - 1);
  }
  return {
    number,
    plus,
    minus
  };
}



const App = () => {
  const sayHello = () => console.log("123123");
  const {number, plus, minus} = Number(0);
  useEffect(sayHello);
  const name = useInput("")
  const tab = useTabs(0, content);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("HolyFuck"),1000);
  return (
    <div>
      <p>
        react hook
      </p>
      {content.map((section, index) => (
        <button onClick={() => tab.changeItem(index)} key={section.tab}>{section.tab}</button>
      ))}
      <div>
        {tab.currentItem.content}
      </div>

      <Input placeholder="text" {...name}/>
      <p>{number}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
