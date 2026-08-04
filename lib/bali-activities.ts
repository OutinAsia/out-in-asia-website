export interface BaliActivity {
  slug: string
  category: string[]
  title: string
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
    slug: "ubud-and-surroundings-i",
    category: ["Nature", "Culture"],
    title: "Ubud and Surroundings I",
    subtitle: "A day trip full of nature and culture",
    description:
      "Begin the day at one of Bali's most beautiful waterfalls, reached through a scenic journey across the island's lush countryside. Continue to Pura Gunung Kawi Sebatu and the sacred Sebatu Holy Water Spring: peaceful, authentic spiritual sites where you can experience Bali's deep religious traditions through a traditional water purification ceremony. End the day at the iconic Tegalalang rice terraces, with the chance to swing above the palms, capture spectacular photos and enjoy lunch overlooking the breathtaking landscape.",
    program: [
      "Tibumana Waterfall",
      "Pura Gunung Kawi Sebatu",
      "Sebatu Holy Water Spring",
      "Tegalalang Rice Terraces",
    ],
    location: "Ubud",
    departure: "around 8am",
    arrival: "around 4pm",
    fee: "130 Euro/person (valid for a minimum of 2 people)",
    inclusions:
      "Transportation, guides during the activities, drinking water, entrance tickets, lunch, Sarung (traditional Balinese cloth required in sacred places).",
    exclusions: "Personal expenses and extra activities like the swing are not included in the price.",
    photoService: "Professional photo service including editing: 50€/person (on request, minimum 2 people)",
    whatToBring:
      "Comfortable light clothes, swimming suit (swimming possible at Tibumana Waterfall, towels provided).",
    fitnessLevel: "Medium — some steps/walking involved to reach the attractions.",
    images: [
      { src: "/bali-activities/activity-1/A1-01.png", alt: "Tibumana Waterfall" },
      { src: "/bali-activities/activity-1/A1-02.jpeg", alt: "Pura Gunung Kawi Sebatu" },
      { src: "/bali-activities/activity-1/A1-03.png", alt: "Sebatu Holy Water Spring" },
      { src: "/bali-activities/activity-1/A1-04.png", alt: "Tegalalang Rice Terraces" },
    ],
  },
  {
    slug: "private-purification-ceremony",
    category: ["Spiritual", "Authentic"],
    title: "Private Purification Ceremony with a Balinese Healer",
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
]

export function getBaliActivity(slug: string): BaliActivity | undefined {
  return baliActivities.find((activity) => activity.slug === slug)
}
