"use client";
import {useContext} from "react";
import TareasContext from "../context/tareas";
import Card from "../components/card";
import React from "react";
import Link from "next/link";

export default function Home() {
    const {tareas} = useContext(TareasContext);

    const renderCards = () =>{
        if(tareas.length > 0){
            const cards = tareas.map((tarea, i)=>{
                return(
                    <Card key={i} tarea={tarea}/>
                )
            });
            return cards;
        }else{
            return (
                <div className="mt-4" >
                    No tiene tareas, Da clic
                    <Link className="font-bold" href="/tareas/nueva"> Aquí </Link>
                    para agregar una tarea.
                </div>
            );
        }
    }

    return (
        <div className="mt-1">
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-gray-700
            dark:text-gray-700">Lista de tareas:</h1>
            {renderCards()}
        </div>
    );
}
