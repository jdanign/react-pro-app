import { useShoppingCart } from "../hooks";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

import { products } from "../data/products";

import '../styles/custom-styles.css'




/* En lugar de un array de productos, un map de productos
const productsMap: Map<string, Product> = new Map();
productsMap.set('1', {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
});
productsMap.set('2', {
    id: '2',
    title: 'Coffee Mug - Meme',
    img: './coffee-mug2.png'
}); */


export const ShoppingPage = ()=>{
    const {shoppingCart, onProductCountChange} = useShoppingCart()


    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'inline-flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {
                    products.map(element => 
                        <ProductCard 
                            key={element.id}
                            product={element}
                            className='bg-dark text-white'
                            onChange={onProductCountChange}
                            value={shoppingCart[element.id]?.count || 0}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )
                    /* Array.from(productsMap, ([id, value]) => 
                        <ProductCard 
                            key={id}
                            product={value}
                            className='bg-dark text-white'
                            onChange={onProductCountChange}
                        >
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ) */
                }
                
            </div>
            
            <div className="shopping-cart">
                {
                    /* Object.values(shoppingCart).map(element => 
                        <ProductCard 
                            key={element.id}
                            product={element}
                            className='bg-dark text-white'
                            style={{width: '100px'}}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    ) */
                    Object.entries(shoppingCart).map(([key, product]) => 
                        <ProductCard 
                            key={key}
                            product={product}
                            className='bg-dark text-white'
                            style={{width: '100px'}}
                            onChange={onProductCountChange}
                            value={product.count}
                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons className='custom-buttons' />
                        </ProductCard>
                    )
                }
            </div>
        </div>
    )
}

export default ShoppingPage;