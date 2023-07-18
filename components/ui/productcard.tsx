"use client"
import { Expand, ShoppingCart } from 'lucide-react';

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "./icon-button";
import Currency from './currency';
import { useRouter } from 'next/navigation';
import usePreviewModal from '@/hooks/use-preview-modal';
import { MouseEventHandler } from 'react';
import useCart from '@/hooks/use-cart';

interface ProductCardProps {
    data: Product;
}


const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {
    const cart = useCart();
    const previewmodal = usePreviewModal();
    const router = useRouter();

    const handclick = () => {
        router.push(`/products/${data?.id}`)
    }

    const onPreview: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        previewmodal.onOpen(data);
    }
    const onAddtoCart: MouseEventHandler<HTMLButtonElement> = (e) => {
        e.stopPropagation();

        cart.addItem(data);
    }

    return (
        <div onClick={handclick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            <div className=" aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="Image"
                    src={data?.images?.[0].url}
                    fill
                    className="aspect-square object-cover rounded-md hover:scale-110 transition overflow-hidden"
                />
                <div className=" opacity-0 group-hover:opacity-100 transiton absolute w-full px-6 bottom-5">
                    <div className="flex justify-center gap-x-6">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />
                        <IconButton
                            onClick={onAddtoCart}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>
            <div>
                <p className='font-semibold text-lg'>
                    {data.name}
                </p>
                <p className='text-sm text-gray-500'>
                    {data.category?.name}
                </p>

            </div>
            <div className='flex items-center justify-between text-red-600'>
                <Currency value={data?.price}/>
            </div>
        </div>
    );
}

export default ProductCard;