import { CSSProperties, ReactElement } from "react"




export interface Product {
    id: string,
    title: string,
    img?: string,
}

/** Interfaz para los productos dentro del carrito */
export interface ProductInCart extends Product {
    count: number,
}

/** Tipado para el atributo de los valores iniciales del 'ProductCard' */
export interface InitialValues {
    count?: number,
    maxCount?: number,
}

/** Interfaz que establece el producto y su contador. */
export interface ProductCard {
    product: Product,
    count: number,
}

/** Interfaz para los productos dentro del carrito */
export interface ProductCardOnChangeArgs extends ProductCard {}

/** Interfaz para manejar la función del children del ProductCard. */
export interface ProductCardHandlers extends ProductCard {
    isMaxCountReached: boolean,
    maxCount?: number,
    increaseBy: (value:number)=> void;
    reset: ()=> void,
}


/** Tipado para las props del componente 'ProductCard' */
export type ProductCardProps = {
    product: Product,
    //children?: ReactElement | ReactElement[], // Puede existir o no y puede ser un componente o varios
    children: (arg:ProductCardHandlers)=> JSX.Element, // Puede existir o no y puede ser un componente o varios
    className?: string,
    style?: CSSProperties | undefined,
    onChange?: (args:ProductCardOnChangeArgs)=> void,
    value?: number,
    initialValues?: InitialValues,
}

/** Tipado para crear el contexto del Provider de un producto  */
export type ProductContextProps = {
    product: Product,
    counter: number, 
    maxCount?: number,
    increaseBy: (value: number) => void
}

/** Tipado de las props del componente. */
export type ProductImageProps = {
    img?:string,
    className?: string,
    style?: CSSProperties | undefined
}

/** Tipado de las props del componente. */
export type ProductTitleProps = {
    title?:string,
    className?: string,
    style?: CSSProperties | undefined
}

/** Tipado de las props del componente. */
export type ProductButtonsProps = {
    className?: string,
    style?: CSSProperties | undefined
}


/** 
 * Tipado del componente que puede llamar a sus componentes hijos como propiedades del mismo.
 */
export type ProductCardHocProps = {
    (Props: ProductCardProps): JSX.Element,
    Title: (Props: ProductTitleProps)=> JSX.Element,
    Image: (Props: ProductImageProps)=> JSX.Element,
    Buttons: (Props: ProductButtonsProps) => JSX.Element,
}