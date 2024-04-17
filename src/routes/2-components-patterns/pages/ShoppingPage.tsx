import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";

import '../styles/custom-styles.css'


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png'
};


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
                {/* Componente como propiedad de otro componente */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title title={'hola'} className='text-bold' />
                    <ProductCard.Buttons className='custom-buttons' style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }} />
                </ProductCard>
                {/* Componente tradicional, componentes importados */}
                <ProductCard 
                    product={product}
                    className='bg-dark text-white'
                >
                    <ProductImage className='custom-image' />
                    <ProductTitle className='text-bold' />
                    <ProductButtons className='custom-buttons' style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }} />
                </ProductCard>
                {/* Componente tradicional, componentes importados */}
                <ProductCard 
                    product={product}
                    style={{
                        backgroundColor: 'cyan'
                    }}
                >
                    <ProductImage style={{
                        boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
                    }} />
                    <ProductTitle style={{
                        fontWeight: 'bold'
                    }} />
                    <ProductButtons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }} />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;