import { lazy, LazyExoticComponent } from "react";
import { /*LazyPage1, LazyPage2, LazyPage3,*/ NoLazy } from "../1-lazyload/pages";




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
const LazyLayout = lazy(()=> import(/* webpackChunkName: "LazyLayout" */'../1-lazyload/layout/LazyLayout'));


/** 
 * Almacena las propiedades de las rutas. 
 * Usa la interfaz Route con un array de objetos Route.
 */
export const ROUTES:Route[] = [
    {
        path: '/lazyload/*',
        to: '/lazyload',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]