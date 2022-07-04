import React from 'react'
import { useState } from 'react'
import LabelInfo from '../style.module.css'
export default function Content({ details, db, set }) {
    let [checked, setChecked] = useState(details.done)
    function taskDone(eID) {
        let tmp = db.filter(e => e.id === eID)[0]
        tmp.done = tmp.done ? false : true
        setChecked(tmp.done)
    }
    function taskDelete(eID) {
        db = db.filter(e => e.id !== eID)
        set(db)
    }
    
    let [title, setTitle] = useState(details.title)
    function taskEdit(eID) {
        let tmp = db.filter(e => e.id === eID)[0]
        let newText = prompt(`Edit: \n ${tmp.title}`)
        tmp.title = newText
        setTitle(tmp.title)
    }
    return (
        <div>
            <div className='d-flex justify-content-around align-items-center m-2' id={LabelInfo.rowME}>
                <label className={LabelInfo.myLabel}>
                    <input type='checkbox' checked={checked} onChange={() => taskDone(details.id)} />
                    <h4>
                        {title}
                    </h4>
                </label>
                <div className={LabelInfo.btnTask}><button className='btn btn-success' onClick={()=>{taskEdit(details.id)}}>edit</button>
                    <button className='btn btn-danger' onClick={() => taskDelete(details.id)} >delete</button></div>
            </div>
        </div>
    )
}
