"use client";

import AffiliateGrid from "./affilateGrid";
import { mockAffiliateProducts } from "../mocks/mockFashion";
import type { AffiliateProduct } from "../types/fashion";

export default function AffiliateShopSection({
    serviceId,
    title,
}: {
    serviceId: string;
    title?: string;
}) {
    // filter products
    const products: AffiliateProduct[] = mockAffiliateProducts.filter(
        (p) => p.serviceId === serviceId
    );

    if (!products.length) return null;

    return (
        <section className="relative mt-16 py-12 text-white overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95,transparent_70%)] opacity-25" />

            <div className="relative max-w-7xl mx-auto px-6">

                {/* HEADER */}
                <div className="flex items-end justify-between mb-6">

                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold">
                            {title || "Shop Professional Products"}
                        </h2>

                        <p className="text-gray-400 text-sm mt-2 max-w-md">
                            Premium tools and products trusted by professionals.
                            Carefully selected to elevate your results.
                        </p>
                    </div>

                    {/* VIEW ALL CTA */}
                    <a
                        href={`/shop?service=${serviceId}`}
                        className="hidden md:block text-sm text-purple-300 hover:text-purple-200 transition"
                    >
                        View all →
                    </a>

                </div>

                {/* PRODUCTS DISPLAY */}
                <AffiliateGrid
                    products={products}
                    serviceId={serviceId}
                />

                {/* MOBILE CTA */}
                <div className="mt-6 text-center md:hidden">
                    <a
                        href={`/shop?service=${serviceId}`}
                        className="text-sm text-purple-300 hover:text-purple-200"
                    >
                        View all products →
                    </a>
                </div>

            </div>
        </section>
    );
}