import {
  BadgeCheck,
  Camera,
  Crown,
  Heart,
  Mountain,
  ShieldCheck,
  Sparkles,
  Users,
  UsersRound
} from "lucide-react";
import type { Destination, GroupPackage, TravelCategory } from "@/types/travel";

export const navigationLinks = [
  { href: "/how-it-works", label: "How It Works" },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-categories", label: "Categories" },
  { href: "/compatibility-quiz", label: "Quiz" },
  { href: "/group-packages", label: "Packages" },
  { href: "/partner-with-us", label: "Partner" },
  { href: "/about-us", label: "About" },
  { href: "/contact", label: "Contact" }
];

export const travelCategories: TravelCategory[] = [
  {
    title: "Gen Z Squad",
    slug: "gen-z-squad",
    description: "High-energy groups for reels, playlists, cafes, viewpoints, and late-night travel stories.",
    bestFor: "Friends and young solo travelers",
    icon: Sparkles
  },
  {
    title: "Couples Escape",
    slug: "couples-escape",
    description: "Privacy-aware itineraries with scenic stays, slower mornings, and romantic experiences.",
    bestFor: "Newly married and dating couples",
    icon: Heart
  },
  {
    title: "Family Explorer",
    slug: "family-explorer",
    description: "Comfortable pacing, reliable drivers, kid-friendly breaks, and practical hotel choices.",
    bestFor: "Parents, children, and family groups",
    icon: UsersRound
  },
  {
    title: "Senior Comfort",
    slug: "senior-comfort",
    description: "Easy routes, helpful partners, fewer long drives, and care-first planning.",
    bestFor: "Senior citizens and relaxed travelers",
    icon: ShieldCheck
  },
  {
    title: "Solo Explorer",
    slug: "solo-explorer",
    description: "Verified groups for independent travelers who want company without losing freedom.",
    bestFor: "Solo travelers",
    icon: Users
  },
  {
    title: "Women-Only Trips",
    slug: "women-only-trips",
    description: "Women-focused groups with verified travelers, safer stays, and clear communication.",
    bestFor: "Women travelers and friend circles",
    icon: BadgeCheck
  },
  {
    title: "Adventure Club",
    slug: "adventure-club",
    description: "Treks, snow points, early starts, higher energy, and thrill-friendly travel companions.",
    bestFor: "Adventure-first travelers",
    icon: Mountain
  },
  {
    title: "Luxury Travelers",
    slug: "luxury-travelers",
    description: "Premium stays, private moments, curated food, and elevated comfort through the route.",
    bestFor: "Premium and luxury guests",
    icon: Crown
  }
];

export const destinations: Destination[] = [
  {
    name: "Gangtok",
    region: "Sikkim",
    description: "A lively capital base with cafes, monasteries, viewpoints, and easy access to east Sikkim.",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
    tags: ["City base", "Cafes", "Monasteries"]
  },
  {
    name: "Nathula Pass",
    region: "Sikkim",
    description: "A dramatic high-altitude route for travelers who enjoy snow, borders, and mountain roads.",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=900&q=80",
    tags: ["Snow", "High altitude", "Adventure"]
  },
  {
    name: "Tsomgo Lake",
    region: "Sikkim",
    description: "A glacial lake experience that works beautifully for families, couples, and photo lovers.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80",
    tags: ["Lake", "Photos", "Scenic"]
  },
  {
    name: "Lachung",
    region: "Sikkim",
    description: "A quiet valley stay for travelers who want mountain calm, waterfalls, and soft adventure.",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    tags: ["Valley", "Waterfalls", "Calm"]
  },
  {
    name: "Lachen",
    region: "Sikkim",
    description: "A remote north Sikkim stop for guests who value raw landscapes and peaceful nights.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
    tags: ["Remote", "North Sikkim", "Nature"]
  },
  {
    name: "Zero Point",
    region: "Sikkim",
    description: "A snow-forward experience for energetic groups comfortable with early starts and long drives.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
    tags: ["Snow", "Adventure", "Long drive"]
  },
  {
    name: "Darjeeling",
    region: "Darjeeling",
    description: "Tea, toy train charm, heritage hotels, cafes, and wide Kanchenjunga views.",
    image: "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?auto=format&fit=crop&w=900&q=80",
    tags: ["Tea town", "Heritage", "Cafes"]
  },
  {
    name: "Tiger Hill",
    region: "Darjeeling",
    description: "A sunrise classic for travelers who do not mind waking early for a serious view.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
    tags: ["Sunrise", "Viewpoint", "Early start"]
  },
  {
    name: "Tea Gardens",
    region: "Darjeeling",
    description: "Gentle walks, green landscapes, premium photos, and relaxed conversations.",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80",
    tags: ["Tea", "Walks", "Relaxed"]
  },
  {
    name: "Mirik",
    region: "Darjeeling",
    description: "A softer lakeside escape with easy pacing for families, couples, and senior groups.",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80",
    tags: ["Lake", "Easy pace", "Family"]
  }
];

export const groupPackages: GroupPackage[] = [
  {
    title: "Gen Z Sikkim Adventure Trip",
    destination: "Gangtok, Tsomgo Lake, Nathula Pass",
    duration: "5 days / 4 nights",
    category: "Gen Z Squad",
    price: "Starting from INR 18,999",
    badge: "94% vibe match",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Romantic Darjeeling Couple Escape",
    destination: "Darjeeling, Tiger Hill, Tea Gardens",
    duration: "4 days / 3 nights",
    category: "Couples Escape",
    price: "Starting from INR 22,499",
    badge: "Privacy-first",
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Family Friendly Gangtok Tour",
    destination: "Gangtok, Tsomgo Lake, local sightseeing",
    duration: "6 days / 5 nights",
    category: "Family Explorer",
    price: "Starting from INR 24,999",
    badge: "Easy pace",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Women Only Sikkim Group Trip",
    destination: "Gangtok, Lachung, Yumthang Valley",
    duration: "6 days / 5 nights",
    category: "Women-Only Trips",
    price: "Starting from INR 26,999",
    badge: "Verified group",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Senior Comfort Darjeeling Tour",
    destination: "Darjeeling, Mirik, Tea Gardens",
    duration: "5 days / 4 nights",
    category: "Senior Comfort",
    price: "Starting from INR 20,999",
    badge: "Comfort route",
    image: "https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=900&q=80"
  },
  {
    title: "Luxury North-East Escape",
    destination: "Gangtok, Pelling, Darjeeling",
    duration: "7 days / 6 nights",
    category: "Luxury Travelers",
    price: "Starting from INR 54,999",
    badge: "Premium match",
    image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?auto=format&fit=crop&w=900&q=80"
  }
];

export const whyChooseUs = [
  { title: "Compatibility Score", copy: "Match travelers by vibe, personality, budget, pace, privacy, and interests.", icon: Sparkles },
  { title: "Verified Travelers", copy: "Profiles, expectations, and trip intent are checked before grouping.", icon: BadgeCheck },
  { title: "Safe Groups", copy: "Women-only preferences, age ranges, and group type filters reduce uncomfortable matches.", icon: ShieldCheck },
  { title: "Partner Agencies", copy: "Local taxi owners, hotels, guides, and agencies power the ground experience.", icon: Mountain },
  { title: "Better Experience", copy: "Music, food, wake-up time, and activity choices are aligned before the trip.", icon: Heart },
  { title: "Group Chat Before Trip", copy: "Travelers can connect, ask questions, and set expectations before departure.", icon: Camera }
];

export const testimonials = [
  {
    name: "Aarav S.",
    role: "Solo traveler",
    quote: "I wanted adventure but not a random taxi group. The match felt natural from the first call."
  },
  {
    name: "Priya and Rohan",
    role: "Couple travelers",
    quote: "The couple-focused group gave us privacy and still kept the trip social. That balance matters."
  },
  {
    name: "Meera K.",
    role: "Family traveler",
    quote: "Our group had similar pace and food preferences. The kids were comfortable and nobody felt rushed."
  }
];

export const howItWorks = [
  "Create your travel profile",
  "Take compatibility quiz",
  "Get matched with similar travelers",
  "Book verified group package",
  "Enjoy the trip"
];
