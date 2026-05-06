
import type {
    FashionService,
    AffiliateProduct,
} from "../types/fashion";

/* =========================
   SERVICES
========================= */

export const mockFashionServices: FashionService[] = [
    {
        id: "makeup",
        name: "Makeup",
        href: "/services#makeup",
        hint: "Glow • Glam • Precision",
        description:
            "Luxury makeup artistry for weddings, events, and editorial looks.",
        images: ["/makeup1.jpg", "/makeup2.jpg"],
        color: "#ec4899",
    },
    {
        id: "braiding",
        name: "Braiding",
        href: "/services#braiding",
        hint: "Detail • Culture • Art",
        description:
            "Intricate braiding styles with cultural and modern fusion.",
        images: ["/braid1.jpg", "/braid2.jpg"],
        color: "#fbbf24",
    },
    {
        id: "sewing",
        name: "Sewing",
        href: "/services#sewing",
        hint: "Tailored • Crafted • Fit",
        description:
            "Custom tailoring and fashion design with luxury finish.",
        images: ["/sew1.jpg", "/sew2.jpg"],
        color: "#a855f7",
    },
    {
        id: "dreadlocks",
        name: "Dreadlocks",
        href: "/services#dreadlocks",
        hint: "Natural • Identity • Strength",
        description:
            "Professional dreadlock styling and maintenance services.",
        images: ["/dread1.jpg", "/dread2.jpg"],
        color: "#10b981",
    },
    {
        id: "wigs-barbering",
        name: "Wigs & Barbering",
        href: "/services#wigs-barbering",
        hint: "Sharp • Clean • Defined",
        description:
            "Premium wig installation and precision barbering.",
        images: ["/wig1.jpg", "/wig2.jpg"],
        color: "#3b82f6",
    },
];

/* =========================
   AFFILIATE PRODUCTS
========================= */

export const mockAffiliateProducts: AffiliateProduct[] = [
    {
        id: "aff-1",
        serviceId: "makeup",
        name: "Pro Makeup Brush Set",
        price: "$29.99",
        image: "/affiliate/brush.jpg",
        rating: 4.8,
        platform: "amazon",
        affiliateUrl: "https://example.com/brush",
        tag: "Best Seller",
    },
    {
        id: "aff-2",
        serviceId: "braiding",
        name: "Hair Beads Styling Kit",
        price: "$18.99",
        image: "/affiliate/beads.jpg",
        rating: 4.6,
        platform: "etsy",
        affiliateUrl: "https://example.com/beads",
        tag: "Stylist Pick",
    },
    {
        id: "aff-3",
        serviceId: "wigs-barbering",
        name: "HD Lace Wig Kit",
        price: "$89.00",
        image: "/affiliate/wig.jpg",
        rating: 4.9,
        platform: "aliexpress",
        affiliateUrl: "https://example.com/wig",
        tag: "Premium",
    },
];
export const galleryItems = [
    {
        name: "Lundmy Dress",
        price: "$720",
        img: "/gallery/lundmy.jpg",
        type: "shop",
        link: "https://affiliate-link.com/lundmy",
    },
    {
        name: "Fobr Day Outfit",
        price: "$455",
        img: "/gallery/fobrday.jpg",
        type: "shop",
        link: "https://affiliate-link.com/fobrday",
    },
    {
        name: "Restchphild Accessory",
        price: "$120",
        img: "/gallery/restchphild.jpg",
        type: "shop",
        link: "https://affiliate-link.com/restchphild",
    },
    {
        name: "Recloder Sitent Jacket",
        price: "$891",
        img: "/gallery/recloder.jpg",
        type: "shop",
        link: "https://affiliate-link.com/recloder",
    },
    {
        name: "Makeup Session",
        price: "₦25,000",
        img: "/gallery/makeup.jpg",
        type: "service",
    },
    {
        name: "Braiding Session",
        price: "₦18,000",
        img: "/gallery/braiding.jpg",
        type: "service",
    },
    {
        name: "Sew-in Session",
        price: "₦30,000",
        img: "/gallery/sewin.jpg",
        type: "service",
    },
    {
        name: "Barbering Session",
        price: "₦10,000",
        img: "/gallery/barbering.jpg",
        type: "service",
    },
];
