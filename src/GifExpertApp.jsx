import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const [categories, setCategories] = useState([ 'Saitama', 'Goku', 'Vegeta' ]);
    const [categories, setCategories] = useState([ 'Saitama' ]);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;
        setCategories( cat => [...cat, newCategory ] );
        //setCategories( [...categories, 'Tanjiro'] );
        //setCategories( cat => [...cat, 'Inosuke' ] );
        //setCategories( categories.concat('Nezuko') );
    };

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ onAddCategory }
            />

            {
                categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    )
                ) 
            }
        </>
    )
}
