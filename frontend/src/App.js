import { useEffect , useState } from "react";
import axios from "axios";
import "./App.css";
import ListTodoLists from "./ListTodoLists";
import TodoList from "./TodoList";

function App() {
    const [listSummaries, setListSummaries] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

  useEffect(()=>{
    reloadData().catch(console.error);
  }, []);

  async function reloadData() {
     const response = await axios.get("/api/lists");
     const data = await response.data;
     setListSummaries(data);
  }

  function handleNewToDoList(newName){
    const updateData = async () => {
      const newListData = {
        name:newName,
      };

      await axios.post('/api/lists',newListData);
      reloadData().catch(console.error);
    };
    updateData();
  }

  function handleDeleteToDoList(id){
    const updateData = async () => {
      await axios.delete('/api/lists/'+id);
      reloadData().catch(console.error);
    };
    updateData();
  }

  function handleSelectList(id){
    console.log("Selecting item",id);
    setSelectedItem(id);
  }

  function backTolist(){
    setSelectedItem(null);
    reloadData().catch(console.error);
  }

  if(selectedItem === null){
    return (
      <div className="App">
        <ListTodoLists
          listSummaries={listSummaries}
          handleSelectList={handleSelectList}
          handleNewToDoList={handleNewToDoList}
          handleDeleteToDoList={handleDeleteToDoList}
        />
      </div>
    );
  }else{
    return (
      <div className="App">
        <TodoList
          listId={selectedItem} 
          handleBackButton={backTolist}
        />
      </div>
    )
  }

  
}

export default App;
