import { ReactElement } from "react"


export interface Product {
    id: string,
    title: string,
    img?: string,
}

export type ProductCardProps = {
    product: Product,
    children?: ReactElement | ReactElement[] // Puede existir o no y puede ser un componente o varios
}

export type ProductContextProps = {
    product: Product,
    counter: number, 
    increaseBy: (value: number) => void
}

export type ProductCardHocProps = {
    ({children, product}: ProductCardProps): JSX.Element,
    Title: ({title}: {title?: string})=> JSX.Element,
    Image: ({img}: {img?: string})=> JSX.Element,
    Buttons: () => JSX.Element,
}