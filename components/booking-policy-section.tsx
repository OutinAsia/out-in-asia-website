export function BookingPolicySection() {
  return (
    <section className="py-14 md:py-20 bg-[#F0E8DA]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-ocean-teal mb-4 text-center">
          Good to Know
        </p>
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-8 text-center">
          Booking <span className="italic text-sunset-orange">Information</span>
        </h2>

        <div className="space-y-5 font-sans text-sm leading-relaxed text-[#7A6A58] text-justify">
          <p>
            Your reservation will be confirmed upon receipt of the deposit (50% of the total package price /
            selected optional programs). This amount covers the reservation costs of the hotels/programs.
          </p>
          <p>
            In case of cancellation, the deposit is <span className="font-semibold text-navy">NON-REFUNDABLE</span>.
            However, 50% of the deposit can be used within 6 months in case of cancellation/rescheduling. The
            holiday can be transferred to another person free of charge.
          </p>
          <p>
            The remaining balance can be settled by bank transfer (received no later than 48 hours prior to the
            activity) or cash payment on meeting. A payment receipt is sent by email either way; an invoice can be
            arranged on request with company details.
          </p>
        </div>
      </div>
    </section>
  )
}
