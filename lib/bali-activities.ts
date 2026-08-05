export interface BaliActivity {
  slug: string
  category: string[]
  titleLine1: string
  titleLine1Accent?: string
  titleLine2?: string
  titleLine2Accent?: string
  /** Full title used on the listing card (falls back to the concatenated title lines if omitted) */
  listingTitle?: string
  subtitle: string
  description: string
  program: string[]
  location: string
  departure: string
  arrival: string
  fee: string
  inclusions: string
  exclusions?: string
  photoService?: string
  whatToBring: string
  fitnessLevel: string
  images: { src: string; alt: string }[]
}

export const baliActivities: BaliActivity[] = [
  {
    slug: "north-ubud-day-trip",
    category: ["Nature", "Culture", "Gastronomy"],
    titleLine1: "North Ubud",
    titleLine2: "Day",
    titleLine2Accent: "Trip",
    listingTitle: "North Ubud Day Trip",
    subtitle: "Waterfalls, Sacred temples, Coffee testing and Rice terraces",
    description:
      "Begin with a visit to one of Bali's most beautiful waterfalls, reached through a scenic drive across the island's lush countryside. Continue to Pura Gunung Kawi Sebatu, a peaceful and authentic Balinese temple surrounded by tropical gardens and sacred springs. Afterwards, enjoy a guided tasting of locally grown coffee and tea. End the experience at the iconic Tegalalang rice terraces, where you can swing above the palms, take spectacular photos and enjoy lunch overlooking the breathtaking landscape.",
    program: [
      "Tibumana Waterfall",
      "Pura Gunung Kawi Sebatu",
      "Traditional coffee and tea testing experience",
      "Tegalalang Rice Terraces",
    ],
    location: "Ubud",
    departure: "around 8am",
    arrival: "around 5pm",
    fee: "€150 / Person (Min.2 People)",
    inclusions:
      "Pick up and drop off at your hotel, transportation between activities, guides during the activities, drinking water, entrance tickets, Sarung (traditional Balinese cloth required in sacred places).",
    exclusions: "Personal expenses, lunch and extra activities like the swing are not included in the price.",
    photoService: "Professional photo service including editing: 185€ (on request)",
    whatToBring:
      "Comfortable light clothes, swimming suit (swimming possible at Tibumana Waterfall, towels provided).",
    fitnessLevel: "Medium — some steps/walking involved to reach some attractions.",
    images: [
      { src: "/bali-activities/activity-1/A1-01.png", alt: "Tibumana Waterfall" },
      { src: "/bali-activities/activity-1/A1-02.jpeg", alt: "Pura Gunung Kawi Sebatu" },
      { src: "/bali-activities/activity-1/A1-03.png", alt: "Traditional coffee and tea testing experience" },
      { src: "/bali-activities/activity-1/A1-04.png", alt: "Tegalalang Rice Terraces" },
    ],
  },
  {
    slug: "private-purification-ceremony",
    category: ["Spiritual"],
    titleLine1: "Purification",
    titleLine1Accent: "Ceremony",
    titleLine2: "with a Balinese",
    titleLine2Accent: "Healer",
    subtitle: "A sacred journey to reconnect with yourself",
    description:
      "Embark on a spiritual inner journey through a traditional Balinese purification ritual. Release the blockages that hold you back and open yourself to receiving happiness and abundance. You will be guided by one of the island's most renowned healers. This mental and physical cleansing will undoubtedly be one of the most profound experiences of your life.",
    program: [
      "Welcome with hibiscus tea and a refreshing towel",
      "Choose a sarong to wear and keep",
      "Personal reading and guidance from the healer",
      "Purification ceremony with sacred mantras and a flower bath",
      "Prayers and blessings at the family altar",
      "Take-home offering of blessed fruits and Balinese treats",
    ],
    location: "Ubud",
    departure: "around 10am",
    arrival: "around 2pm",
    fee: "€210 / Person (Min.2 People)",
    inclusions:
      "Pick up and drop off at your hotel, experience with the Balinese healer, Sarung (traditional Balinese cloth required in sacred places).",
    photoService: "Professional photo service including editing: 50€/person (on request, minimum 2 people)",
    whatToBring: "Comfortable light clothes, swimming shorts and dry change of clothes.",
    fitnessLevel: "No physical effort required.",
    images: [
      { src: "/bali-activities/activity-2/A2-01.png", alt: "Sacred purification with a Balinese healer" },
      { src: "/bali-activities/activity-2/A2-02.png", alt: "Sacred purification with a Balinese healer" },
      { src: "/bali-activities/activity-2/A2-03.png", alt: "Sacred purification with a Balinese healer" },
    ],
  },
  {
    slug: "nusa-penida-dream-day-trip",
    category: ["Nature"],
    titleLine1: "Nusa",
    titleLine1Accent: "Penida",
    titleLine2: "Day",
    titleLine2Accent: "Trip",
    listingTitle: "Nusa Penida Day Trip",
    subtitle: "Discover the natural beauty of Nusa Penida",
    description:
      "Many people think these famous beaches are in Bali, but they are actually located on the nearby island of Nusa Penida, which we'll reach by speedboat in around 45 minutes. We'll visit the iconic Kelingking Beach, followed by the beautiful Broken Beach and Angel's Billabong, where turquoise waters and impressive coastal scenery create unforgettable views. This experience is perfect for anyone who loves beaches, nature and spectacular landscapes.",
    program: [
      "Kelingking Beach",
      "Broken Beach",
      "Angel Billabong",
      "Crystal Bay (if time allows)",
    ],
    location: "Nusa Penida Island",
    departure: "around 6:45am",
    arrival: "around 6:30pm",
    fee: "€210 / Person (Min.2 People)",
    inclusions:
      "Pick up and drop off at your hotel, speed boat both ways from Sanur to Nusa Penida, transportation between activities, guides during the activities, drinking water, entrance tickets.",
    exclusions: "Personal expenses and lunch are not included in the price.",
    photoService: "Professional photo service including editing: 200€ (on request)",
    whatToBring: "Comfortable light clothes, swimming shorts and dry change of clothes (towels provided).",
    fitnessLevel: "Easy — only short walks.",
    images: [
      { src: "/bali-activities/activity-3/A3-01.jpg", alt: "Kelingking Beach" },
      { src: "/bali-activities/activity-3/A3-02.jpg", alt: "Broken Beach" },
      { src: "/bali-activities/activity-3/A3-03.png", alt: "Angel Billabong" },
      { src: "/bali-activities/activity-3/A3-04.jpg", alt: "Crystal Bay" },
    ],
  },
  {
    slug: "elephant-park",
    category: ["Nature"],
    titleLine1: "Elephant",
    titleLine1Accent: "Park",
    subtitle: "A Close Encounter with Elephants",
    description:
      "During this special experience, you will meet the elephants up close and learn about their lives and daily care. You will begin by preparing their food, then feed them during a walk through the park's natural surroundings. Their caretakers will share interesting facts about the elephants' behavior, habits and routines, helping you understand these remarkable animals better. One of the highlights is bathing them in the water — a playful and memorable moment for both you and the elephants. You will also have time to take photos and watch a short educational video about their care.",
    program: [
      "Preparing the elephants' lunch",
      "Walking with the elephants and feeding them",
      "Bathing the elephants",
      "Receiving information from the caretakers",
      "Taking photos and videos with the elephants",
      "Buffet lunch",
    ],
    location: "Ubud",
    departure: "around 8am",
    arrival: "around 2pm",
    fee: "€160 / Person (Min.2 People) — €230 / Person if combined with rafting",
    inclusions: "Pick up and drop off at your hotel, guides during the activities, drinking water, entrance tickets, buffet lunch.",
    exclusions: "Personal expenses are not included in the price.",
    photoService: "Professional photo service including editing: 185€ (on request)",
    whatToBring: "Comfortable light clothes.",
    fitnessLevel: "Light — no physical effort required for this activity.",
    images: [
      { src: "/bali-activities/activity-4/A4-01.png", alt: "Experience a day with the elephants" },
      { src: "/bali-activities/activity-4/A4-02.png", alt: "Experience a day with the elephants" },
    ],
  },
]

export function getBaliActivity(slug: string): BaliActivity | undefined {
  return baliActivities.find((activity) => activity.slug === slug)
}

export function getActivityFullTitle(activity: BaliActivity): string {
  const line1 = [activity.titleLine1, activity.titleLine1Accent].filter(Boolean).join(" ")
  const line2 = [activity.titleLine2, activity.titleLine2Accent].filter(Boolean).join(" ")
  return [line1, line2].filter(Boolean).join(" ")
}
