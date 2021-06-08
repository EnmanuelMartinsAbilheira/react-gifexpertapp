import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp =() =>{

    // const categories = ['One Punch', 'Samurai X', 'Naruto'];
    const [categories, setCategories] = useState(['Naruto']);

    // const handleAdd = () =>{
    //     // setCategories( [ 'HunterXHunter', ...categories]);
    //     setCategories(  );
    // }
    return(
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                { 
                    categories.map( category =>  
                       <GifGrid    
                            key={category}
                            category={category} />
                    ) 
                }
            </ol>

        </>
    )
}