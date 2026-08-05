"use client"

import { useState } from "react"
import Image from "next/image"

interface ActivityGalleryProps {
  images: { src: string; alt: string }[]
}

export function ActivityGallery({ images }: ActivityGalleryProps) {
  const [active, setActive] = useState(0)
  const current = images[active]

  return (
    <div className="mx-auto md:max-w-2xl">
      <div className="relative w-full aspect-[3/2] rounded-2xl overflow-hidden">
        <Image src={current.src} alt={current.alt} fill className="object-cover" />
      </div>
      <p className="font-sans text-sm text-navy/70 mt-3 mb-4">{current.alt}</p>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-[3/2] rounded-lg overflow-hidden transition-all ${
                i === active ? "ring-2 ring-sunset-orange" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
