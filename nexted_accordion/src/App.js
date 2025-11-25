import logo from './logo.svg';
import './App.css';

const list = [
  {id: 1, name: "parent 1", parentId: null},
   {id: 2, name: "child 1.1", parentId: 1},
   {id: 3, name: "child 1.2", parentId: 1},
   {id: 4, name: "parent 2", parentId: null},
   {id: 5, name: "child 2.1", parentId: 4},
]

const getParentId = (parentId, originalList) => {
  return originalList.filter((item) => item.parentId === parentId)
}

const List = ({item, originalList, tab}) => {
  const childList = getParentId(item.id, originalList)
  return (<div style={{padding: `${tab*10}px`}}>
    <span >{item.name}</span>
    {childList.map((item) => (<List item={item} originalList={originalList} tab={tab+1}/>))}
    </div>)
}

function App() {
  const rootNode = getParentId(null, list)
  console.log(rootNode)
  return (
    <div>
      {rootNode.map((item) => (<List item={item} originalList={list} tab={0}/>))}
    </div>
  );
}

export default App;
