import React from 'react';
import { Link } from 'react-router-dom';
import s from '../styles/Filters.module.css';

export default function Filters() {
    return (
        <div className={s.container}>
            <div className={s.order}>
                <h2>Ordenar por</h2>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        // dispatch(sortByNameAsc());
                        // dispatch(setActualPageFilter(0));
                    } }className={s.btn} >Nombre Asc</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        // dispatch(sortByNameDes());
                        // dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Nombre Des</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        // dispatch(sortByAttackAsc());
                        // dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Fuerza Asc</button>
                </Link>
                <Link to="/filtered" >
                    <button onClick={ ()=> {
                        // dispatch(sortByAttackDes());
                        // dispatch(setActualPageFilter(0));
                    } } className={s.btn}>Fuerza Des</button>
                </Link>
            </div>
            {/* <div className={s.filter}>
                <Link to="/filtered" >
                    <button className={s.btn}
                        onClick={() => {
                            // dispatch(filterOnlyDB());
                            // dispatch(setSubFiltereds(0));
                        }}
                        >solo de DB</button>
                </Link>
                <Link to="/filtered" >
                    <button className={s.btn}
                    onClick={() => {
                        // dispatch(filterOnlyApi());
                        // dispatch(setSubFiltereds(0));
                    }}
                    >solo de Api</button>
                </Link>
            </div> */}
            <div className={s.filter}>
                {/* { types && types.map( t => <label
                        key={t} className={s.item}>
                            {t}
                        <input type="checkbox" 
                        name={t}
                        value={t}
                        onChange={changing}
                        className={s.check}
                        />
                    </label>) }
                <Link to="/filtered">
                    <button onClick={()=>{
                        console.log(validate());
                        dispatch( filterByTypes( validate() ) );
                        dispatch(setActualPageFilter(0));
                        // dispatch( filter() );
                        }} className={s.btn}>Aplicar</button>
                </Link> */}
            </div>
        </div>
    )
}
