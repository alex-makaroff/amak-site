const API_BASE = import.meta.env.VITE_API_BASE_URL || "";

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats?: {
    thumbnail?: { url: string };
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
  };
}

export interface WebsiteDetails {
  __component: "case.website-details";
  liveUrl: string;
  ctaLabel: string;
  openInNewTab: boolean;
}

export interface DesignScreen {
  id: number;
  image: StrapiImage;
  title?: string;
  caption?: string;
  alt?: string;
  order?: number;
}

export interface DesignDetails {
  __component: "case.design-details";
  platform: string;
  screensCount?: number;
  viewer: "browser" | "phone" | "none";
  screens: DesignScreen[];
  ctaLabel: string;
}

export type CaseDetails = WebsiteDetails | DesignDetails;

export interface StrapiCase {
  id: number;
  attributes: {
    title: string;
    slug: string;
    type: "website" | "design";
    badge: string;
    excerpt?: string;
    description?: string;
    cover: { data: { id: number; attributes: StrapiImage } };
    coverAlt?: string;
    isFeatured: boolean;
    featuredRank?: number;
    sortRank?: number;
    details: CaseDetails[];
  };
}

interface StrapiResponse<T> {
  data: T;
  meta?: { pagination?: { total: number } };
}

async function strapiGet<T>(path: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, { signal });
  if (!res.ok) throw new Error(`Strapi ${res.status}: ${res.statusText}`);
  return res.json();
}

export function getCoverUrl(c: StrapiCase): string {
  const img = c.attributes.cover?.data?.attributes;
  if (!img) return "";
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE}${img.url}`;
}

export function getScreenUrl(s: DesignScreen): string {
  const img = s.image;
  if (!img) return "";
  const url = (img as any).url || (img as any)?.data?.attributes?.url;
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_BASE}${url}`;
}

export async function fetchFeaturedCases(
  type: "website" | "design",
  signal?: AbortSignal
): Promise<StrapiCase[]> {
  const qs = new URLSearchParams({
    "filters[type][$eq]": type,
    "filters[isFeatured][$eq]": "true",
    "sort": "featuredRank:asc",
    "pagination[pageSize]": "3",
    "populate[cover]": "*",
    "populate[details]": "*",
  });
  const res = await strapiGet<StrapiResponse<StrapiCase[]>>(
    `/api/cases?${qs}`,
    signal
  );
  return res.data;
}

export async function fetchAllCases(
  type: "website" | "design",
  signal?: AbortSignal
): Promise<StrapiCase[]> {
  const qs = new URLSearchParams({
    "filters[type][$eq]": type,
    "sort": "sortRank:asc",
    "pagination[pageSize]": "50",
    "populate[cover]": "*",
    "populate[details]": "*",
  });
  const res = await strapiGet<StrapiResponse<StrapiCase[]>>(
    `/api/cases?${qs}`,
    signal
  );
  return res.data;
}

export async function fetchCaseBySlug(
  slug: string,
  signal?: AbortSignal
): Promise<StrapiCase | null> {
  const qs = new URLSearchParams({
    "filters[slug][$eq]": slug,
    "filters[type][$eq]": "design",
    "populate[cover]": "*",
    "populate[details][populate][screens][populate]": "*",
  });
  const res = await strapiGet<StrapiResponse<StrapiCase[]>>(
    `/api/cases?${qs}`,
    signal
  );
  return res.data.length > 0 ? res.data[0] : null;
}
