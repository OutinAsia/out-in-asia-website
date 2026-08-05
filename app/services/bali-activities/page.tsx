import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageTransition } from "@/components/page-transition";
import { PageHero } from "@/components/page-hero";
import { baliActivities, getActivityFullTitle } from "@/lib/bali-activities";

export const metadata = {
  title: "Bali Activities | Out in Asia",
  description:
    "Curated private day experiences across Bali, blending nature, culture and spirit — book a waterfall trek, temple visit or a private purification ceremony.",
};

export default function BaliActivitiesPage() {
  return (
    <>
      <Header />
      <PageTransition>
        <main className="overflow-x-hidden">

          <PageHero
            image="/bali-activities/cover-web.png"
            eyebrow="BALI ACTIVITIES"
            title="Private Days"
            titleLine2="in"
            titleLine2Accent="Bali"
            subtitle="Curated day experiences across Bali, blending nature, culture and spirit"
          />

          <section className="py-14 md:py-24 bg-warm-cream">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <p className="font-sans text-xs text-ocean-teal font-medium tracking-widest uppercase mb-4">
                  Choose Your Day
                </p>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">
                  Bali <span className="italic text-sunset-orange">Activities</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {baliActivities.map((activity) => (
                  <Link
                    key={activity.slug}
                    href={`/services/bali-activities/${activity.slug}`}
                    className="group rounded-2xl overflow-hidden bg-white block"
                    style={{ boxShadow: "0 4px 32px rgba(14,31,56,0.08)" }}
                  >
                    <div className="relative overflow-hidden" style={{ paddingBottom: "62%" }}>
                      <Image
                        src={activity.images[0].src}
                        alt={activity.images[0].alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="px-6 py-6">
                      <p className="font-sans text-xs font-semibold tracking-widest uppercase text-ocean-teal mb-3">
                        {activity.category.join(" · ")}
                      </p>
                      <h3 className="font-serif text-xl font-bold text-navy mb-3 leading-snug">
                        {activity.listingTitle ?? getActivityFullTitle(activity)}
                      </h3>
                      <p className="font-sans text-sm leading-relaxed text-navy/70">
                        {activity.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

        </main>
      </PageTransition>
      <Footer />
    </>
  );
}
