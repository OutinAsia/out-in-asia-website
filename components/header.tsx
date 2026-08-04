"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const navLinks: { href: string; label: string; children?: { href: string; label: string }[] }[] = [
  { href: "/trips", label: "Group Trips" },
  { href: "/private-trips", label: "Private Trips" },
  {
    href: "/services/bali-activities",
    label: "Services",
    children: [
      { href: "/services/consultation", label: "Consultation" },
      { href: "/services/bali-activities", label: "Bali Activities" },
    ],
  },
  { href: "/about", label: "Meet Us" },
  { href: "/contact", label: "Get in Touch" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    if (!isMenuOpen) setIsMobileServicesOpen(false)
    return () => { document.body.style.overflow = "" }
  }, [isMenuOpen])

  const logoSrc = isMenuOpen || !isScrolled ? "/logo-text-navy-bg.svg" : "/logo-text-light-bg.svg"
  const headerBg = isMenuOpen ? "bg-[#0E1F38]" : isScrolled ? "bg-[#FAF6EF] shadow-sm" : "bg-transparent"

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={logoSrc}
              alt="Out in Asia"
              width={160}
              height={48}
              className="h-12 w-auto opacity-100"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    onClick={() => setIsServicesOpen((prev) => !prev)}
                    aria-expanded={isServicesOpen}
                    className={`relative flex items-center gap-1.5 font-sans text-base font-medium tracking-wider transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sunset-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-[#0E1F38]" : "text-white"}`}
                  >
                    {link.label}
                    <ChevronDown
                      className="h-4 w-4 transition-transform duration-200"
                      style={{ transform: isServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    />
                  </button>

                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div
                          className="min-w-[220px] rounded-xl overflow-hidden bg-[#FAF6EF] py-2"
                          style={{ boxShadow: "0 12px 32px rgba(14,31,56,0.18)" }}
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsServicesOpen(false)}
                              className="block px-5 py-3 font-sans text-sm font-medium text-navy hover:bg-navy/5 hover:text-sunset-orange transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-base font-medium tracking-wider transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sunset-orange after:transition-all after:duration-300 hover:after:w-full ${isScrolled ? "text-[#0E1F38]" : "text-white"}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <Link
            href="/contact"
            className={`hidden lg:inline-flex items-center px-8 py-3 rounded-full font-sans font-semibold text-base transition-all duration-300 ${isScrolled ? "bg-navy text-white hover:bg-ocean-teal" : "border-2 border-white text-white hover:bg-white hover:text-navy"}`}
          >
            Book a Trip
          </Link>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden flex items-center justify-center w-11 h-11 -mr-1.5"
          >
            {isMenuOpen
              ? <X className="h-6 w-6 text-white" />
              : <Menu className={`h-6 w-6 ${isScrolled ? "text-[#0E1F38]" : "text-white"}`} />
            }
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 top-20 bg-[#0E1F38] z-40 flex flex-col lg:hidden"
          >
            {/* Nav links — centred vertically, compact */}
            <div className="flex-1 flex flex-col items-center justify-center gap-1">
              {navLinks.map((link, i) =>
                link.children ? (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.25 }}
                    className="w-full flex flex-col items-center"
                  >
                    <button
                      onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                      aria-expanded={isMobileServicesOpen}
                      className="flex items-center gap-2 py-4 font-serif text-2xl text-white hover:text-[#EA5A2A] transition-colors"
                    >
                      {link.label}
                      <ChevronDown
                        className="h-5 w-5 transition-transform duration-200"
                        style={{ transform: isMobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="flex flex-col items-center overflow-hidden"
                        >
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center justify-center py-3 font-sans text-lg text-white/70 hover:text-[#EA5A2A] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    {i < navLinks.length - 1 && (
                      <div className="w-8 h-px bg-white/10 mx-auto mt-1" />
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 + i * 0.05, duration: 0.25 }}
                    className="w-full"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center py-4 font-serif text-2xl text-white hover:text-[#EA5A2A] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {i < navLinks.length - 1 && (
                      <div className="w-8 h-px bg-white/10 mx-auto" />
                    )}
                  </motion.div>
                )
              )}
            </div>

            {/* Book a Trip CTA — pinned to bottom */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.25 }}
              className="flex justify-center px-6 pb-10"
            >
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="inline-flex items-center justify-center px-10 py-4 bg-[#EA5A2A] text-white rounded-full font-sans font-semibold text-base min-h-[52px]"
              >
                Book a Trip
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
