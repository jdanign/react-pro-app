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


const product = products[0];


export const ShoppingPage = ()=>{
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />

            <div style={{
                display: 'inline-flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard 
                    key={product.id}
                    product={product}
                    className='bg-dark text-white'
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {({count, isMaxCountReached, reset, increaseBy})=>(
                        <>
                            <ProductImage className='custom-image' />
                            <ProductTitle className='text-bold' />
                            <ProductButtons className='custom-buttons' />
                            {/* {JSON.stringify(args, null, 3)} */}
                            <button onClick={reset}>Reset</button>
                            <button onClick={()=>increaseBy(-2)}>-2</button>
                            <span style={{margin:'0 5px'}}>{count}</span>
                            {isMaxCountReached || <button onClick={()=>increaseBy(+2)}>+2</button>}
                            
                        </>
                    )}
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;