import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/productcard";


interface ProductsListProps{
    title: string;
    items : Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({
    title,
    items
}) => {



    return ( 
        <div className="space-y-4">
            <h3 className="font-bold text-xl">{title}</h3>
            {items.length === 0 && <NoResults /> } 
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {items.map((product) => (
                    <ProductCard key={product.id} data={product}/>
                ))}
            </div>
        </div>
     );
}
 
export default ProductsList;