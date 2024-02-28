import './App.css';
import { useState } from 'react';

function App() {

  const [list, setList] = useState([])
  const [inputText, setInputText] = useState()
  const [editMode, setEditMode] = useState()
  const [currentIndex , setCurrentIndex] = useState(false);


  function addItem(){
    const copyList = [...list]
    copyList.push(inputText)
    setList(copyList)

    setInputText('')
  }

  function updateText(e){
    const value = e.target.value;
    setInputText(value);
  }

  function deleteItem(index){
    const copyList = [...list]
    copyList.splice(index , 1)
    setList(copyList)
  }

  function editItem(index){
    const copyList = [...list]
    const value = copyList[index]
    setInputText(value)

    setEditMode(true)

    setCurrentIndex(index);
  }

  function finishedItem(index){
    const copyList = [...list]
    copyList.splice(index , 1)
    setList(copyList)
    alert("Congratulation! You have done your work (:")
  }

  function updateItem(){
    const copyList = [...list]
    copyList[currentIndex] = inputText
    setList(copyList)
    setEditMode(false)

    setInputText('')
  }

  function deleteAll(){
    const copyList = [...list]
    copyList.splice(0 , list.length)
    setList(copyList)
    
  }
  

  return (
    <div className='App'>
      <div className='main-content'>
        <div className='main-div'>
          
          <h2>TODO APP BY <br></br> <span> <a target='-blank' href='https://www.facebook.com/waqar.rana.1253236?mibextid=ZbWKwL'> "Waqar Rana" </a></span></h2>
        
        <input className='input-field' value={inputText} onChange={updateText} placeholder='Enter any Item'></input>
       <div className='button'> { editMode ? <button className='btn-update' onClick={updateItem}>Update</button>
        : <button className='btn-add' onClick={addItem}>Add</button>}
        <button className='delBtn' onClick={deleteAll}>Delete All</button> </div>

        <table className='table' border={2} >
          <tr className='table-row'>
            <th>S.No</th>
            <th>Todo Items</th>
            <th colSpan={3}>Actions</th>
          </tr>
          {list.map(function(item , index){
            return <tr  className=  { editMode && currentIndex === index ? 'listItem'  : ''}>
              <td>{index + 1}</td>
              <td>{item}</td>
              <td><button className='del-btn' onClick={() => deleteItem(index)}>Delete</button></td>
              <td><button className='edit-btn' onClick={() =>editItem(index)}>Edit</button></td>
              <td><button className='finish-btn' onClick={() =>finishedItem(index)}>Finished</button></td>
              </tr>
          })}
        </table>
        </div>
      </div>
    </div>
  )

}
export default App;
