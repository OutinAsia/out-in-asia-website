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
    <div>
      <div className="relative h-72 sm:h-96 md:h-[420px] rounded-2xl overflow-hidden">
        <Image src={current.src} alt={current.alt} fill className="object-cover" />
      </div>
      <p className="font-sans text-sm text-navy/70 mt-3 mb-4">{current.alt}</p>

      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden transition-all ${
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
