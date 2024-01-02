import React, { useState } from 'react'

export default function Todo() {
    let [list,setlist] = useState ([])
    let [inputText , setInputText] = useState ('')
    
    function updateText(e){
        setInputText(e.target.value)
    }
    
    function addItem(){
        var copyList = [...list]
        copyList.push(inputText)
        setlist(copyList)
       
        
    }

    function DeleteAll (){
        setlist([])
    }
    function Delete(e){
var copyList = [...list]
copyList.splice(e,1)
setlist(copyList)
    }
    function DeleteAll(){
        setlist([])
    }
    function Edit(Event){
        var copyList = [list]
        // copyList.slice(1,2)
var a =  prompt('Enter here',copyList)
setlist([a])

        // setlist(copyList)

      

        

 }
    return(
    <div>
      <h1>Todo App</h1>

      <input onChange={updateText} type="text" />
      <button onClick={addItem}>Add Item</button>
      <button onClick={DeleteAll}>Delete All</button>

<ul>
    {
list.map((value,index)=>{
    return <li key={index}>{value} <button onClick={Edit}>Edit</button> <button onClick={()=>Delete(Event)}>Delete</button></li>
})
    }
</ul>
    </div>
  )
}
