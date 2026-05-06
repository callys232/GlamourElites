"use client";

import type { AffiliateProduct } from "../types/fashion";

export default function AffiliateCard({
    product,
}: {
    product: AffiliateProduct;
}) {
    return (
        <a
            href={product.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl
      transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
        >
            {/* IMAGE */}
            <div className="relative h-52 overflow-hidden">

                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* TAG BADGE */}
                {product.tag && (
                    <div className="absolute top-3 left-3 px-2 py-1 text-[10px] rounded-full bg-black/60 text-white">
                        {product.tag}
                    </div>
                )}

                {/* PLATFORM BADGE */}
                <div className="absolute top-3 right-3 px-2 py-1 text-[10px] rounded-full bg-white/10 text-white uppercase">
                    {product.platform}
                </div>
            </div>

            {/* CONTENT */}
            <div className="p-4">

                <h3 className="text-white font-semibold text-sm leading-snug">
                    {product.name}
                </h3>

                {/* rating */}
                {product.rating && (
                    <p className="text-xs text-gray-400 mt-1">
                        ⭐ {product.rating} / 5
                    </p>
                )}

                {/* price */}
                {product.price && (
                    <p className="text-sm text-gray-300 mt-2">
                        {product.price}
                    </p>
                )}

                {/* CTA */}
                <div className="mt-4 text-xs text-purple-300 group-hover:text-purple-200 transition">
                    View Product →
                </div>
            </div>
        </a>
    );
}