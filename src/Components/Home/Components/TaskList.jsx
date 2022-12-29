import React from 'react'
import { Items } from './Items';

export const TaskList = ({ listaTareas, setListaTareas, toggleTask, handleDelete }) => {

    return (
        <>
            <ul className='space-y-4 p-3'>
                {
                    listaTareas.map((item, index) => {
                        return <Items key={index}
                            name={item.name}
                            complete={item.done}
                            toggleTask={toggleTask}
                            handleDelete={handleDelete}
                            listaTareas={listaTareas}
                            setListaTareas={setListaTareas}
                        />
                    })
                }
            </ul>
        </>
    )
}
