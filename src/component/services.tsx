"use client";

import { useEffect, useState } from "react";
import ServiceCard from "./serviceCard";
import type { FashionService } from "../types/fashion";
import { mockFashionServices } from "../mocks/mockFashion";
import { useActiveSection } from "./useScrollSpy";

export default function ServicesSection() {
    const [services, setServices] = useState<FashionService[]>([]);

    const active = useActiveSection(services.map((s) => s.id));

    useEffect(() => {
        async function load() {
            try {
                // replace later with API call
                setServices(mockFashionServices);
            } catch (e) {
                setServices(mockFashionServices);
            }
        }

        load();
    }, []);

    return (
        <section className="relative py-20 bg-[#0b0615] text-white overflow-hidden">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#4c1d95,transparent_70%)] opacity-40" />

            <div className="relative max-w-7xl mx-auto px-6">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        Luxury Beauty Services
                    </h2>
                    <p className="text-gray-400 mt-3">
                        Scroll, explore, and book your preferred service instantly
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            active={active === service.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}