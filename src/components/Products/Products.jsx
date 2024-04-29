import React from 'react';

import translations from '../../mock/translations.json';
import { products } from '../../mock/data';

import { ProductsSection, ProductsWrapper, ProductsTitle, ImageWrapper, Product } from './ProductsStyles';

const Item = ({ item }) => {
    return (
        <ProductsWrapper>
            <ImageWrapper>
                <img src={item.imageUrl} alt={item.title} />
                <h4>{item.title}</h4>
            </ImageWrapper>
        </ProductsWrapper>
    );
};

const Products = () => {
    return <ProductsSection id="products">
        <ProductsTitle>{translations.products.title}</ProductsTitle>
        <Product>
            {products.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </Product>
    </ProductsSection>;
};

export default Products;
