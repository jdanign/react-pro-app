import { ProductCardHocProps } from '../interfaces';

import { ProductCard as ProductCardHoc } from './ProductCard'
import { ProductButtons } from './'
import { ProductImage } from './'
import { ProductTitle } from './'

/**
 * Asigna otros componentes como propiedades del componente padre.
 */
export const ProductCard: ProductCardHocProps = Object.assign(ProductCardHoc, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons,
});

export default ProductCard;


export * from './ProductButtons'
export * from './ProductImage'
export * from './ProductTitle'