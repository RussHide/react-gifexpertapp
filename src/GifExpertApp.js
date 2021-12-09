
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Bad Bunny']);
   /*  const handleAdd = () => {
         setCategories([...categories, 'Pokemon']);
        setCategories(cats => [...cats, 'Pokemon']);
    } */

    return (
        <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories}/>
        <hr />
        <ol>
            {categories.map(cat =>
                <GifGrid key={cat} category={cat}/>
            )}
        </ol>
        </>
    )
}
