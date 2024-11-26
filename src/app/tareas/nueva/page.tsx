"use client";
import React, {useState, useContext} from "react";
import TareasContext from "../../../context/tareas";
import Link from "next/link";

export default function TareaCreatePage(){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const {agregarTarea, id} = useContext(TareasContext);

    const addTask = (e)=>{
        e.preventDefault();
        //add validation
        if(!title){
            return
        }else{

            agregarTarea({titulo:title, descripcion:description, id})
            console.log(id)

            setTitle('')
            setDescription('')
        }
    }

    return(
        <div className="container mx-auto max-w-96">
            <form onSubmit={(e)=> addTask(e)}>
                <h3 className="font-bold flex-col gap-4">Crear tarea</h3>
                <br/>
                <div className="sm:col-span-4">
                    <label htmlFor="title" className="block text-sm/6 font-medium text-gray-900">
                        Título
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                onChange={(e)=>setTitle(e.target.value)}
                                value={title}
                                id="titulo"
                                name="titulo"
                                type="text"
                                placeholder="Tarea..."
                                className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <div className="sm:col-span-4">
                    <label htmlFor="content" className="block text-sm/6 font-medium text-gray-900">
                        Contenido
                    </label>
                    <div className="mt-2">
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <textarea
                            onChange={(e)=>setDescription(e.target.value)}
                            value={description}
                            id="content"
                            name="content"
                            placeholder="Agrega una descripción"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm/6"
                        />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Link  className="text-sm/6 font-semibold text-gray-900" href="/">Cancelar</Link>
                    <button
                        type="submit"
                        className="rounded-md bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Guardar
                    </button>
                </div>
            </form>
        </div>
    )
}