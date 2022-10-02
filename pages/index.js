import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
export const getStaticProps=async()=> {
  const res=await fetch('https://jsonplaceholder.typicode.com/todos')
  const data=await res.json();
  return{
    props:{ 
      data,
     },
}
}
 
export default function Home({data}) {
  const [tasks,setTasks]=useState("")
    const [taskList,setTaskList]=useState(data)
    const handleTasks=(e)=>{
        // e.preventDefault()
        setTasks(e.target.value)
        console.log(tasks);
    }
    const handleTaskList=(e)=>{
        e.preventDefault()
        setTaskList([tasks,...taskList])
        setTasks("")
        
    }
    const handleDelete=(item)=>{
        const newTaskList=taskList.filter((todo)=>{
            return taskList.indexOf(item) != taskList.indexOf(todo)
        })
        setTaskList(newTaskList)
    }
    console.log(taskList);
    
  return (
    <div className={styles.container}>
           <form>
            <input type="text" placeholder="add task" onChange={handleTasks} value={tasks}></input><button onClick={handleTaskList}>Submit</button>
            <ul>
                {
                    // taskList.length>=1 ? taskList.map((item,i)=>{
                    //     return <li key={i}>{item}<button onClick={(e)=>{
                    //         e.preventDefault()
                    //         handleDelete(item)
                    //     }}>x</button></li>
                    // }):
                    // <h2>Add task</h2>
                    }
                    {taskList.map((obj)=>{
                      return <li key={obj.id}>{obj.id}<input type='checkbox'></input></li>
                    })}
            </ul>
           </form>
           {/* <ul>
            {data.map((item)=>{
              return <li>{item.title}</li>
            })}
           </ul> */}
        </div>
    )
}
  
  

