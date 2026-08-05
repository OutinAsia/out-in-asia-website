export interface BaliActivity {
  slug: string
  category: string[]
  title: string
  titleLine2?: string
  titleLine2Accent?: string
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
    title: "North Ubud",
    titleLine2: "Day",
    titleLine2Accent: "Trip",
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
    fee: "150 Euro/person (valid for a minimum of 2 people)",
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
    title: "Purification Ceremony",
    titleLine2: "with a Balinese",
    titleLine2Accent: "Healer",
    subtitle: "A sacred journey to reconnect with yourself",
    description:
      "Embark on a spiritual inner journey through a traditional Balinese purification ritual. Release the blockages that hold you back and open yourself to receiving happiness and abundance. You will be guided by one of the island's most renowned healers. This mental and physical cleansing will undoubtedly be one of the most profound experiences of your life.",
    program: [
      "Arrival: hibiscus tea and a refreshing towel",
      "Choose a sarong (yours to keep as a gift)",
      "Personal tarot reading and guidance from the healer",
      "Balinese purification ceremony with sacred mantras and a fragrant flower bath",
      "Prayers at the family altar for health, abundance and protection",
      "Consecrated fruits and Balinese delicacies to take with you",
    ],
    location: "Ubud",
    departure: "around 10am",
    arrival: "around 2pm",
    fee: "210 Euro/person (valid for a minimum of 2 people)",
    inclusions: "Transportation.",
    photoService: "Professional photo service including editing: 50€/person (on request, minimum 2 people)",
    whatToBring: "Comfortable light clothes.",
    fitnessLevel: "No physical effort required.",
    images: [
      { src: "/bali-activities/activity-2/A2-01.png", alt: "Sacred purification with a Balinese healer" },
    ],
  },
  {
    slug: "nusa-penida-dream-day-trip",
    category: ["Nature"],
    title: "Nusa Penida",
    titleLine2: "Dream Day",
    titleLine2Accent: "Trip",
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
    fee: "210 Euro/person (valid for a minimum of 2 people), including pick up and drop off at your hotel",
    inclusions:
      "Pick up and drop off at your hotel, speed boat both ways from Sanur to Nusa Penida, transportation between activities, guides during the activities, drinking water, entrance tickets.",
    exclusions: "Personal expenses and lunch are not included in the price.",
    photoService: "Professional photo service including editing: 200€ (on request)",
    whatToBring: "Comfortable light clothes, swimming suit (towels provided).",
    fitnessLevel: "Easy — only short walks.",
    images: [
      { src: "/bali-activities/activity-3/A3-01.jpg", alt: "Kelingking Beach" },
      { src: "/bali-activities/activity-3/A3-02.jpg", alt: "Broken Beach" },
      { src: "/bali-activities/activity-3/A3-03.png", alt: "Angel Billabong" },
      { src: "/bali-activities/activity-3/A3-04.jpg", alt: "Crystal Bay" },
    ],
  },
]

export function getBaliActivity(slug: string): BaliActivity | undefined {
  return baliActivities.find((activity) => activity.slug === slug)
}
