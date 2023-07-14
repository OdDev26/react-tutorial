import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]); // passing <string[]>  tells TS that products is a string []
  useEffect(() => {
    console.log("Fetching in", category);
    // setProducts(["Clothing", "Beverages"]); // This line of code would always trigger a rerender of the component meaning the useEffect would be trigged again and again to infinity, to limit to effect to rendering once, we do:
  }, [category]); // passing an empty list means the effect has no dependency and would always execute once
  return <div>ProductList</div>;
};

export default ProductList;
