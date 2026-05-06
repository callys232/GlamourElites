
export type FashionService = {
  id: string;
  name: string;
  hint: string;
  description: string;
  images: string[];
  color: string;
  href: string;
};

export type BookingPrefill = {
  id: string;
  name: string;
  color: string;
};

export type AffiliateProduct = {
  id: string;
  serviceId: string; // links to FashionService.id
  name: string;
  price?: string;
  image: string;
  rating?: number;
  platform: "amazon" | "aliexpress" | "etsy" | "other";
  affiliateUrl: string;
  tag?: string;
};