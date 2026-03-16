"use client";

import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  const toggleMobileSubmenu = (menu: string) =>
    setMobileSubmenu(mobileSubmenu === menu ? null : menu);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="text-2xl font-bold whitespace-nowrap hover:opacity-80 transition">
                <span className="text-blue-600">Milwaukee</span>
                <span className="text-gray-900"> Home Care</span>
              </Link>

              {/* ── Desktop nav (md and up) ── */}
              <ul className="desktop-only gap-8 text-base items-center">

                {/* Services Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('services')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="/home-care-services/" className="flex items-center gap-1 whitespace-nowrap text-gray-700 hover:text-blue-600 transition font-medium py-2">
                    Services
                    <span className="text-xs leading-none">▾</span>
                  </a>
                  {openDropdown === 'services' && (
                    <div className="absolute left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-xl py-2 border-t-2 border-t-blue-600">
                      <a href="/home-care-services/senior-care/alzheimers-dementia-services/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Alzheimer&apos;s &amp; Dementia Care</a>
                      <a href="/home-care-services/senior-care/companionship-services/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Companionship Services</a>
                      <a href="/home-care-services/senior-care/meals-and-nutrition/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Meals &amp; Nutrition</a>
                      <a href="/home-care-services/senior-care/personal-care-services/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Personal Care Services</a>
                      <a href="/home-care-services/senior-care/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Senior Care Overview</a>
                      <a href="/home-care-services/senior-care/transportation/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Transportation</a>
                      <a href="/home-care-services/senior-care/veteran-care/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Veteran Care</a>
                    </div>
                  )}
                </li>

                {/* Service Areas Dropdown */}
                <li
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('areas')}
                  onMouseLeave={handleMouseLeave}
                >
                  <a href="/home-care-service-area/" className="flex items-center gap-1 whitespace-nowrap text-gray-700 hover:text-blue-600 transition font-medium py-2">
                    Service Areas
                    <span className="text-xs leading-none">▾</span>
                  </a>
                  {openDropdown === 'areas' && (
                    <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-lg shadow-xl py-2 border-t-2 border-t-blue-600">
                      <a href="/home-care-service-area/home-care-bayside/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Bayside</a>
                      <a href="/home-care-service-area/home-care-fox-point/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Fox Point</a>
                      <a href="/home-care-service-area/home-care-glendale/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Glendale</a>
                      <a href="/home-care-service-area/home-care-north-shore/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">North Shore</a>
                      <a href="/home-care-service-area/home-care-river-hills/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">River Hills</a>
                      <a href="/home-care-service-area/home-care-shorewood/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Shorewood</a>
                      <a href="/home-care-service-area/home-care-wauwatosa/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Wauwatosa</a>
                      <a href="/home-care-service-area/home-care-whitefish-bay/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition">Whitefish Bay</a>
                    </div>
                  )}
                </li>

                {/* Blog Link */}
                <li>
                  <a href="/blog/" className="whitespace-nowrap text-gray-700 hover:text-blue-600 transition font-medium py-2">
                    Blog
                  </a>
                </li>
              </ul>

              {/* ── Hamburger button (mobile only, hidden on md+) ── */}
              <button
                className="mobile-only flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-blue-50 transition"
                onClick={() => { setMobileMenuOpen(!mobileMenuOpen); setMobileSubmenu(null); }}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-0.5 bg-blue-600 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block w-5 h-0.5 bg-blue-600 mt-1 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-0.5 bg-blue-600 mt-1 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </button>

            </div>
          </nav>

          {/* ── Mobile slide-down menu ── */}
          {mobileMenuOpen && (
            <div className="bg-white border-t-2 border-t-blue-600 shadow-lg">

              {/* Services */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileSubmenu('services')}
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold text-base hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <span>Services</span>
                  <span className="text-blue-500 text-sm font-normal">{mobileSubmenu === 'services' ? '▴' : '▾'}</span>
                </button>
                {mobileSubmenu === 'services' && (
                  <div className="border-t border-gray-100 bg-gray-50 divide-y divide-gray-100">
                    <a href="/home-care-services/senior-care/alzheimers-dementia-services/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Alzheimer&apos;s &amp; Dementia Care</a>
                    <a href="/home-care-services/senior-care/companionship-services/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Companionship Services</a>
                    <a href="/home-care-services/senior-care/meals-and-nutrition/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Meals &amp; Nutrition</a>
                    <a href="/home-care-services/senior-care/personal-care-services/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Personal Care Services</a>
                    <a href="/home-care-services/home-care-rates/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Rates &amp; Pricing</a>
                    <a href="/home-care-services/senior-care/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Senior Care Overview</a>
                    <a href="/home-care-services/senior-care/transportation/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Transportation</a>
                    <a href="/home-care-services/senior-care/veteran-care/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Veteran Care</a>
                  </div>
                )}
              </div>

              {/* Service Areas */}
              <div className="border-b border-gray-100">
                <button
                  onClick={() => toggleMobileSubmenu('areas')}
                  className="w-full flex items-center justify-between px-6 py-4 text-gray-800 font-semibold text-base hover:bg-blue-50 hover:text-blue-600 transition"
                >
                  <span>Service Areas</span>
                  <span className="text-blue-500 text-sm font-normal">{mobileSubmenu === 'areas' ? '▴' : '▾'}</span>
                </button>
                {mobileSubmenu === 'areas' && (
                  <div className="border-t border-gray-100 bg-gray-50 divide-y divide-gray-100">
                    <a href="/home-care-service-area/home-care-bayside/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Bayside</a>
                    <a href="/home-care-service-area/home-care-fox-point/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Fox Point</a>
                    <a href="/home-care-service-area/home-care-glendale/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Glendale</a>
                    <a href="/home-care-service-area/home-care-north-shore/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">North Shore</a>
                    <a href="/home-care-service-area/home-care-river-hills/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">River Hills</a>
                    <a href="/home-care-service-area/home-care-shorewood/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Shorewood</a>
                    <a href="/home-care-service-area/home-care-wauwatosa/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Wauwatosa</a>
                    <a href="/home-care-service-area/home-care-whitefish-bay/" className="block px-8 py-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition">Whitefish Bay</a>
                  </div>
                )}
              </div>

              {/* Blog */}
              <a href="/blog/" className="block px-6 py-4 text-gray-800 font-semibold text-base hover:bg-blue-50 hover:text-blue-600 transition border-b border-gray-100">
                Blog
              </a>

            </div>
          )}
        </header>

        <main>{children}</main>

        <footer className="border-t border-gray-200 bg-gray-900 text-gray-100 py-12">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center text-sm text-gray-500">
              <p>&copy; 2026 Milwaukee Home Care. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
