"use client";
import React, {createContext, useState} from "react";

const TareasContext = createContext({});

function Provider ({children}){
    const [tareas, setTareas] = useState([]);
    const [id, setId] = useState(0);
    const shareTareas = {
        id,
        tareas,
        agregarTarea: (newTarea)=>{
            setTareas([...tareas, newTarea]);
            setId((id+1))
        },
        eliminarTarea:(title)=>{
            let newTareas = tareas.filter((tar) =>{
                    return tar.titulo !== title
                }
            )
            setTareas(newTareas);
        },
        editarTarea: (id, title, description)=>{
            let newEdited = tareas.map(tar => {
                if (tar.id === id) {
                    console.log(tar.id)
                    return {...tar, titulo:title, descripcion:description}
                } else {
                    return tar
                }
            })
            setTareas(newEdited)
        }
    }
    return (
        <TareasContext.Provider value={shareTareas}>
            {children}
        </TareasContext.Provider>
    )
}
export {Provider};
export default TareasContext;