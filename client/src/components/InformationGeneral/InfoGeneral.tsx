import React from 'react';
import Document from './Document';
import s from '../../styles/InfoGeneral.module.css';

export default function InfoGeneral() {
    return (
        <div>
            <select name="IndependienteSalon" id="">
                <option value="">Independiente</option>
                <option value="">Salon</option>
            </select>
            <form action="" className={s.container}>
                <label>
                    Nombre
                    <input type="text" name="name" />
                </label>
                <label>
                    Celular
                    <input type="text" name="phone" />
                </label>
                <label>
                    Correo Electrónico
                    <input type="text" name="email" />
                </label>
                <Document/>
                <label>
                    Ciudad de Expedición
                    <input type="text" name="expeditionCity" />
                </label>
                <label>
                    Fecha de Expedición
                    <input type="text" name="expeditionDate" />
                </label>
                <label>
                    Usuario
                    <input type="text" name="user" />
                </label>
                <button type="submit">Crear Cuenta</button>
            </form>
        </div>
    )
}
