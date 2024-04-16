import {ProductButtons, ProductCard, ProductImage, ProductTitle} from "../components";


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
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title={'hola'} />
                    <ProductCard.Buttons />
                </ProductCard>
                {/* Componente tradicional */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage;