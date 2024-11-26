"use client";
import React, {useContext, useState} from "react";
import TareasContext from "../context/tareas";

export default function Card ({tarea}){
    const {eliminarTarea, editarTarea} = useContext(TareasContext);
    const [title, setTitle] = useState(tarea.titulo);
    const [description, setDescription] = useState(tarea.descripcion);
    const [editMode, setEditMode] = useState(false);

    const editar = (id, title, description) => {
        console.log('tarea a editar:',id)
        editarTarea(id, title, description)
        setEditMode(prevCheck => !prevCheck);
    }
    let taskContent;
    if(editMode){
        taskContent = (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg
            shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={title}
                    onChange={e=>setTitle(e.target.value)}
                />
                <br/>
                <textarea
                    onChange={(e)=>setDescription(e.target.value)}
                    value={description}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <div className="flex items-center justify-end">
                    <button onClick={()=>setEditMode(prevCheck => !prevCheck)}
                            className="icon-[mdi-light--home] h-12 w-12">
                        <svg className="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <line x1="18" y1="6" x2="6" y2="18"/>
                            <line x1="6" y1="6" x2="18" y2="18"/>
                        </svg>
                    </button>
                    <button onClick={()=>editar(tarea.id, title, description)}
                            className="icon-[mdi-light--home] h-12 w-12">
                        <svg className="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24"
                             strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                             strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"/>
                            <path d="M5 12l5 5l10 -10"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    }else taskContent = (
        <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg
            shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {tarea.titulo}
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{tarea.descripcion}</p>
            <div className="flex items-center justify-end">
                <button onClick={()=>setEditMode(prevCheck => !prevCheck)}
                        className="icon-[mdi-light--home] h-12 w-12">
                    <svg className="h-8 w-8 text-gray-500" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"
                         fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"
                         strokeLinejoin="round">
                        <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                    </svg>
                </button>
                <button onClick={()=>eliminarTarea(tarea.titulo)}>
                    <svg className="h-8 w-8 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        <line x1="10" y1="11" x2="10" y2="17"/>
                        <line x1="14" y1="11" x2="14" y2="17"/>
                    </svg>
                </button>
            </div>
        </div>
    )

    return taskContent
}