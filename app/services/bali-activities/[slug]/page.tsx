import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MapPin, Clock, Backpack, Activity } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHero } from "@/components/page-hero";
import { ActivityGallery } from "@/components/activity-gallery";
import { ActivityPricingBlock } from "@/components/activity-pricing-block";
import { BookingPolicySection } from "@/components/booking-policy-section";
import { baliActivities, getBaliActivity } from "@/lib/bali-activities";

export async function generateStaticParams() {
  return baliActivities.map((activity) => ({ slug: activity.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getBaliActivity(slug);
  if (!activity) return { title: "Activity Not Found" };
  return { title: `${activity.title} | Out in Asia`, description: activity.subtitle };
}

export default async function BaliActivityPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const activity = getBaliActivity(slug);

  if (!activity) notFound();

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">

        {/* ── Hero ── */}
        <PageHero
          image={activity.images[0].src}
          eyebrow={activity.category.join(" · ").toUpperCase()}
          title={activity.title}
          titleAccent={activity.titleAccent}
          titleLine2={activity.titleLine2}
          titleLine2Accent={activity.titleLine2Accent}
          subtitle={activity.subtitle}
          topContent={
            <Link
              href="/services/bali-activities"
              className="inline-flex items-center gap-2 font-sans text-white/60 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              All activities
            </Link>
          }
        />

        {/* ── Logistics ── */}
        <section className="py-5 md:py-6 bg-sunset-orange">
          <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <MapPin className="h-4 w-4 text-white" strokeWidth={1.5} />
                <p className="font-serif text-white font-bold text-xs sm:text-sm">{activity.location}</p>
                <p className="font-sans text-white/75 text-[0.65rem] uppercase tracking-wider">Location</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-4 w-4 text-white" strokeWidth={1.5} />
                <p className="font-serif text-white font-bold text-xs sm:text-sm">{activity.departure}</p>
                <p className="font-sans text-white/75 text-[0.65rem] uppercase tracking-wider">Departure</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-4 w-4 text-white" strokeWidth={1.5} />
                <p className="font-serif text-white font-bold text-xs sm:text-sm">{activity.arrival}</p>
                <p className="font-sans text-white/75 text-[0.65rem] uppercase tracking-wider">Arrival</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stops + Description ── */}
        <section className="py-10 md:py-14 bg-warm-cream">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-start gap-10">

              {/* Stops — left on desktop, top on mobile */}
              <div className="lg:w-2/5">
                <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-3">
                  The Itinerary
                </p>
                <h2 className="font-serif text-3xl font-bold text-navy mb-6">
                  The Main <span className="italic text-sunset-orange">Stops</span>
                </h2>
                <ul className="space-y-4">
                  {activity.program.map((stop, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sunset-orange text-white font-serif font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <span className="font-sans text-base text-navy/80 pt-1">{stop}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Description — right on desktop, below stops on mobile */}
              <div className="lg:w-3/5">
                <p className="font-sans text-sm md:text-base leading-relaxed text-navy/80 text-justify">
                  {activity.description}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ── Gallery ── */}
        <section className="py-10 md:py-14 bg-[#F0E8DA]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-3">
                Gallery
              </p>
              <h2 className="font-serif text-3xl font-bold text-navy">
                A Glimpse of the <span className="italic text-sunset-orange">Day</span>
              </h2>
            </div>
            <ActivityGallery images={activity.images} />
          </div>
        </section>

        {/* ── What to bring / Fitness ── */}
        <section className="py-10 md:py-14 bg-warm-cream">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-teal/10 flex items-center justify-center flex-shrink-0">
                  <Backpack className="h-5 w-5 text-ocean-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-navy mb-1.5">What to Bring</p>
                  <p className="font-sans text-sm leading-relaxed text-navy/70">{activity.whatToBring}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-ocean-teal/10 flex items-center justify-center flex-shrink-0">
                  <Activity className="h-5 w-5 text-ocean-teal" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-navy mb-1.5">Fitness &amp; Difficulty</p>
                  <p className="font-sans text-sm leading-relaxed text-navy/70">{activity.fitnessLevel}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <ActivityPricingBlock
          fee={activity.fee}
          inclusions={activity.inclusions}
          exclusions={activity.exclusions}
          photoService={activity.photoService}
          activityTitle={activity.title}
        />

        {/* ── Booking policy ── */}
        <BookingPolicySection />

      </main>
      <Footer />
    </>
  );
}
