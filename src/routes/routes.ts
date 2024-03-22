import { lazy, LazyExoticComponent } from "react";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../1-lazyload/pages";




/** Debe ser un JSX functional component. */
type JSXComponent = () => JSX.Element;


/** 
 * Interfaz para las rutas.
 * El componente que devuelve puede ser un componente cualquiera o 
 * bien uno de tipo 'LazyExoticComponent' para los componentes cargados 
 * con lazyload.
 */
interface Route {
    to: string,
    path: string,
    Component: JSXComponent | LazyExoticComponent<JSXComponent>,
    name: string
}


/** Obtiene un componente mediante lazyload. */
const Lazy1 = lazy(()=> import(/* webpackChunkName: "LazyPage1" */'../1-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(()=> import(/* webpackChunkName: "LazyPage2" */'../1-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(()=> import(/* webpackChunkName: "LazyPage3" */'../1-lazyload/pages/LazyPage3'));


/** 
 * Almacena las propiedades de las rutas. 
 * Usa la interfaz Route con un array de objetos Route.
 */
export const ROUTES:Route[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        Component: Lazy1,
        name: 'Lazy 1'
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        Component: Lazy2,
        name: 'Lazy 2'
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        Component: Lazy3,
        name: 'Lazy 3'
    },
]