import { useState } from 'react'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Saitama', 'Goku', 'Vegeta' ]);

    const onAddCategory = () => {
        //setCategories( [...categories, 'Tanjiro'] );
        setCategories( cat => [...cat, 'Inosuke' ] );
        //setCategories( categories.concat('Nezuko') );
    };

    return (
        <>
        {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}

            {/* Listado de Gif */}
            <button onClick={ onAddCategory }>Agregar</button>
            <ol>
                { categories.map(category => {
                        return <li key={ category }>{category}</li>
                    }) 
                }
            </ol>
                {/* Gif Item */}
        </>
    )
}
