import getProducts from "@/actions/get-products";
import Billboard from "@/components/ui/billboard";
import ProductsList from "@/components/product-list";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboards";

export const revalidate = 0;

const HomePage = async () => {

  const billboard = await getBillboard("2298fade-bd7c-4e18-a9d1-a74c3dae089d");
  const products = await getProducts({ isFeatured: true });


  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductsList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default HomePage;