import React from 'react'
import { useRef } from 'react'

export default function Footer({posts,db}) {
    let myTask=useRef(null)
    const Handler=()=>{
        if(myTask.current.value.replaceAll(/\s/g,'')==='') return
        let file={}
        file.id=posts.db.length!==0?posts.db[posts.db.length-1].id+1:0
        file.title=myTask.current.value
        myTask.current.value=''
        file.done=false
        posts.setDB([...posts.db,file])
        console.log(file)
    }
    onkeydown=(e)=>{
        if(e.key=='Enter'){
            Handler()
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center p-2 m-2'>
        <input type="text" ref={myTask} className='input-group w-75 border p-2' />
        <button onClick={Handler} className='btn btn-primary p-2 px-4' >+</button>
    </div>
  )
}
