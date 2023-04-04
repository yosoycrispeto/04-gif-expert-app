import { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('');

    const onInputChange = ({ target }) => {
        setinputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if ( inputValue.trim().length <= 1 ) return;

        // setCategories( cat => [ ...cat, inputValue ] );
        onNewCategory( inputValue.trim() );
        setinputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar GIF's"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}
