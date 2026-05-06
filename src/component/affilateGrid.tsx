"use client";

import AffiliateCard from "./affiliateCard";
import type { AffiliateProduct } from "../types/fashion";

export default function AffiliateGrid({
    products,
    serviceId,
}: {
    products: AffiliateProduct[];
    serviceId: string;
}) {
    const filtered = products
        .filter((p) => p.serviceId === serviceId)
        .slice(0, 6); // limit to 6 (important for UX)

    if (!filtered.length) return null;

    return (
        <section className="mt-12">

            {/* HEADER */}
            <div className="mb-5 px-1">
                <h3 className="text-xl font-semibold text-white">
                    Recommended Tools & Products
                </h3>
                <p className="text-xs text-gray-400 mt-1">
                    Curated items used by professionals in this service
                </p>
            </div>

            {/* MOBILE: HORIZONTAL SCROLL */}
            <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:hidden scrollbar-hide">

                {filtered.map((product) => (
                    <div
                        key={product.id}
                        className="snap-start min-w-[220px] max-w-[220px]"
                    >
                        <AffiliateCard product={product} />
                    </div>
                ))}

            </div>

            {/* DESKTOP: GRID */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-5">

                {filtered.map((product) => (
                    <AffiliateCard
                        key={product.id}
                        product={product}
                    />
                ))}

            </div>
        </section>
    );
}