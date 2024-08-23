
import React, { createContext, useContext, useState, ReactNode } from 'react';

//1. import createContext   , useContext

interface Product {
  id: number;
  name:string;
  price:number;
  priceMessage:string;
  description: string;
  imageUrl: string;
  likes: number;
  quantity: number;
}

interface ProductContextProps {
  products: Product[];
  handleAddToCart: (id: number) => void;
  handleLike: (id: number) => void;
  handleQuantityChange: (id: number, quantity: number) => void;
}

// 2. IMPORTANT----  CREATE THE CONTEXT
const ProductContext = createContext<ProductContextProps | undefined>(undefined);


//3. use the CONTEXT and test is its undefined

//test if the Sub Component is used outside the PROVIDER, if yest 
//throw an error, if use inside, the proper way, then return that context
//because it has the product data and the methods needed
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {

    console.log("Use me inside the PARENT")
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};


//4. Create a PROVIDER METHOD that will supply the actual react 
//Provider with a value that will be available to all children
// that are rendered inside this provider, 
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  // preparing product data
    const [products, setProducts] = useState<Product[]>(
        [
    { id: 1, name: 'Samsung',description:"Best samsung ever Lorem Ipsum is simply dummy text of the printing and typesetting printing and", price:35, priceMessage:"45% discount", imageUrl: '/assets/samsung.webp', likes: 56, quantity: 56 },
    { id: 2, name: 'Iphone',description:"Best Iphone  ever", price:65, priceMessage:"15% discount", imageUrl: '/assets/iphone.webp', likes: 56, quantity: 30 },
   
  ]
);

  const handleAddToCart = (id: number) => {
    console.log(`Added product ${id} to cart`);
  };

  const handleLike = (id: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, likes: product.likes + 1 } : product
    ));
  };

  const handleQuantityChange = (id: number, quantity: number) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, quantity } : product
    ));
  };

  return (
    <ProductContext.Provider value={{ products, handleAddToCart, handleLike, handleQuantityChange }}>
     
     
     <div className=" CENTER p-6 gap-6 bg-white shadow-md w-[650px] h-[300px] rounded-lg">
        
        {children}
  
    
      </div>
    
    
    </ProductContext.Provider>
  );
};
