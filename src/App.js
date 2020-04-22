import React, { useEffect, useState } from 'react';
import useInput from './useInput';
import useTabs from './useTabs';
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
const Number = (init, division) => {
  const [number, setNumber] = useState(init);
  if(division === 1){
    setNumber(number + 1);
  }else if(division === 0){
    setNumber(number - 1);
  }
  return number;
}

const App = () => {
  const sayHello = () => console.log("123123");
  useEffect(() => {
    sayHello();
  })
  const num = Number(0);
  const name = useInput("")
  const tab = useTabs(0, content);
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

      <button onClick={() => Number(num, 1)}>{num}</button>
    </div>
  );
}

export default App;
