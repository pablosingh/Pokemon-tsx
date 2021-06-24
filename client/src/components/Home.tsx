import React, { useState } from 'react';

interface state {
    name: string,
    lastname: string
};

export default function Home() {
    const [state, setState] = useState<state>({
        name: "",
        lastname: ""
    });
    function submiting (e: React.FormEvent ): void {
        e.preventDefault();
        console.log(state);
    };

    function changing (e: React.ChangeEvent<HTMLInputElement>): void {
        // console.log( e.target.value );
        setState ({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    return (
        <form action='POST'>
            <h2>Crear Cuenta</h2>
            <span>Modalidad de Servicio</span>
            <select name="Modo" id="Modo" >
                <option>nro 1</option>
                <option>nro 2</option>
                <option>nro 3</option>
            </select>
            <input type="text" name="name" onChange={changing}/>
            <input type="text" name="lastname" onChange={changing}/>
            <button type="submit" onClick={submiting}>Enviar</button>
            
        </form>
    )
}
