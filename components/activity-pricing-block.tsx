import { Check, X, Mail, Camera } from "lucide-react"

interface ActivityPricingBlockProps {
  fee: string
  inclusions: string
  exclusions?: string
  photoService?: string
  activityTitle: string
}

export function ActivityPricingBlock({ fee, inclusions, exclusions, photoService, activityTitle }: ActivityPricingBlockProps) {
  const feeMatch = fee.match(/^(.*?)\s*\(([^)]+)\)(.*)$/)
  const mainFee = feeMatch ? feeMatch[1] : fee
  const feeNote = feeMatch ? feeMatch[2] : null
  const feeExtra = feeMatch?.[3]?.replace(/^\s*[—-]\s*/, "").trim() || null

  return (
    <section className="py-10 md:py-16 bg-[#0E1F38]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">

        <div className="text-center mb-8">
          <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-3">
            THE DETAILS
          </p>
          <h2 className="font-serif font-bold text-white mb-2" style={{ fontSize: "clamp(1.75rem, 4vw, 2.25rem)" }}>
            Pricing &amp; <span className="italic text-sunset-orange">Inclusions</span>
          </h2>
        </div>

        {/* Fee card */}
        <div className="border border-ocean-teal/50 rounded-xl p-5 md:p-6 bg-white/[0.04] mb-5 text-center">
          <p className="font-sans text-white/45 text-[10px] uppercase tracking-[0.2em] mb-2">
            Participation Fee
          </p>
          <p className="font-serif text-white leading-none" style={{ fontSize: "clamp(1.6rem, 5vw, 2.25rem)" }}>
            {mainFee}
          </p>
          {feeNote && (
            <p className="font-sans text-sunset-orange text-xs font-semibold uppercase tracking-wide mt-2">
              {feeNote}
            </p>
          )}
          {feeExtra && (
            <p className="font-sans text-white/50 text-xs mt-2">
              {feeExtra}
            </p>
          )}
        </div>

        {/* Inclusions / Exclusions */}
        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5 md:p-6 mb-5 space-y-5">
          <div className="flex items-start gap-3">
            <Check className="h-4 w-4 text-ocean-teal flex-shrink-0 mt-0.5" strokeWidth={2.5} />
            <div>
              <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ocean-teal mb-1.5">Included</p>
              <p className="font-sans text-white/70 text-sm leading-relaxed">{inclusions}</p>
            </div>
          </div>
          {exclusions && (
            <div className="flex items-start gap-3">
              <X className="h-4 w-4 flex-shrink-0 mt-0.5" style={{ color: "#EA5A2A" }} strokeWidth={2} />
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase mb-1.5" style={{ color: "#EA5A2A" }}>Not Included</p>
                <p className="font-sans text-white/50 text-sm leading-relaxed">{exclusions}</p>
              </div>
            </div>
          )}
          {photoService && (
            <div className="flex items-start gap-3">
              <Camera className="h-4 w-4 text-ocean-teal flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-ocean-teal mb-1.5">Optional Add-On</p>
                <p className="font-sans text-white/70 text-sm leading-relaxed">{photoService}</p>
              </div>
            </div>
          )}
        </div>

        <a
          href={`/contact?trip=private-trips&message=${encodeURIComponent(`I'm interested in the "${activityTitle}" activity.`)}#reach-out`}
          className="max-w-lg mx-auto flex items-center justify-center gap-2.5 py-4 px-8 bg-sunset-orange text-white rounded-full font-sans font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          <Mail className="h-4 w-4 flex-shrink-0" />
          Enquire Now
        </a>

      </div>
    </section>
  )
}
