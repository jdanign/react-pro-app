import { CSSProperties, ReactElement } from "react"


export interface Product {
    id: string,
    title: string,
    img?: string,
}

export type ProductCardProps = {
    product: Product,
    children?: ReactElement | ReactElement[], // Puede existir o no y puede ser un componente o varios
    className?: string,
    style?: CSSProperties | undefined
}

export type ProductContextProps = {
    product: Product,
    counter: number, 
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