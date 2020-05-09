import React, { useEffect, useState, useRef } from 'react';
import useInput from './useInput';
import useTabs from './useTabs';
import useTitle from './useTitle';
import useClick from './useClick';
import useConfirm from './useConfirm';
import usePreventLeave from './usePreventLeave';
import useBeforeLeave from './useBeforeLeave';
import useFadeIn from './useFadeIn';
import useNetwork from './useNetwork';
import useScroll from './useScroll';
import useFullScreen from './useFullScreen';
import useNotification from './useNotification';
import styled from 'styled-components'
import useAxios from './useAxios';

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
  const sayHello = () => console.log("HI");
  const {number, plus, minus} = Number(0);
  useEffect(sayHello,[]);
  const name = useInput("")
  const tab = useTabs(0, content);
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("HolyFuck"),1000);
  const refer = useRef();
  useEffect(() => {setTimeout(() => refer.current.focus(), 2000)},[refer]);
  
  const click = () => console.log("Click");
  const title = useClick(click);

  const deleteWord = () => {console.log("delete this")};
  const abort = () => {console.log("abort")};
  const confirmDelete = useConfirm("Are you sure?", deleteWord, abort);

  const { enablePrevent, disablePrevent } = usePreventLeave();

  const beforeLife = () => console.log("pleas don`t leave");
  useBeforeLeave(beforeLife);

  const fadeInH1 = useFadeIn(2, 1);
  const fadeInP = useFadeIn(4, 10);

  const handleNetworkChange = (online) => {
    console.log(online? "onLine!" : "offLine...");
  }
  const onLine = useNetwork(handleNetworkChange);

  const {y} = useScroll();

  const onFullS = (isFull) => {
    console.log(isFull ? "full" : "small");
  }
  const {element, triggerFull, exitFull} = useFullScreen(onFullS);

  const triggerNotif = useNotification("I ll be god",{body: "I love"});

  const {loading, error, data, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"})
  console.log(`loading : ${loading}, error: ${error}, data : ${JSON.stringify(data)}`);

  return (
    <div style={{height:"1000vh"}}>
      <p ref={title}>
        react hook
      </p>
      {content.map((section, index) => (
        <button onClick={() => tab.changeItem(index)} key={section.tab}>{section.tab}</button>
      ))}
      <div>
        {tab.currentItem.content}
      </div>

      <Input placeholder="text" {...name}/>
      <input ref={refer} placeholder="focus"/>
      <p>{number}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <hr/>
      <button onClick={confirmDelete}>Delete this</button>
      <hr/>
      <button onClick={enablePrevent}>Portect</button>
      <button onClick={disablePrevent}>UnPortect</button>
      <hr/>
      <h1 {...fadeInH1}>Hello</h1>
      <p {...fadeInP}>fadeIn</p>
      <hr/>
      <h1>{onLine ? "Online" : 'offLine'}</h1>
      <hr/>
      <h1 style={{color:y > 100 ? "red" : "blue"}}>H1</h1>
      <hr/>
      <div ref={element}>
        <img alt="something" src="https://image.shutterstock.com/image-photo/flying-by-lake-600w-111732092.jpg"/>
        <button onClick={exitFull}>exit</button>
      </div>
      <button onClick={triggerFull}>전체화면</button>
      <hr/>
      <button onClick={triggerNotif}>Notification</button>
      <hr/>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refetch</button>
    </div>
  );
}

export default App;
