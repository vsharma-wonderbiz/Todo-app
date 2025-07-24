import React from "react";

type PropsType={
    id:string,
    text:string,
    completed:boolean,
    toggleTask:(id:string)=>void,
    deletTask:(id:string)=>void
}



const TodoList=({id,text,completed,toggleTask,deletTask}:PropsType)=>{

    const completeTask=():void=>{
          toggleTask(id)
     }

     const TaskDelete=():void=>{
         deletTask(id)
     }
    return (
        <>
        <div className="main-con">
            <div className="left-part">
            <div
                className="completed"
                onClick={completeTask}
                style={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: completed ? "green" : "white",
                    border: "2px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {completed && (
                    <svg width="16" height="16" viewBox="0 0 16 16">
                        <polyline
                            points="4,8 7,11 12,5"
                            style={{ fill: "none", stroke: "white", strokeWidth: 2 }}
                        />
                    </svg>
                )}
            </div>
               <h4>{text}</h4>
            </div>
            <div className="right-part">
                <div className="delete-btn" onClick={TaskDelete}></div>
            </div>
        </div>
        </>
    )
}

export default TodoList