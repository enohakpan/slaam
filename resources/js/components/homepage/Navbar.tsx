"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, ArrowRight, Clock, TrendingUp } from "lucide-react"

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [searchValue, setSearchValue] = useState("")
  const [recentSearches, setRecentSearches] = useState(["Award Categories", "Nomination Process", "Previous Winners"])

  const suggestions = [
    "Artist of the Year",
    "Voting Process",
    "SLAAM Awards 2024",
    "Lifetime Honorees",
    "Contact Information",
  ]

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) return
    if (!recentSearches.includes(searchTerm)) {
      setRecentSearches((prev) => [searchTerm, ...prev.slice(0, 4)])
    }
    console.log(`Searching for: ${searchTerm}`)
    setShowSearch(false)
  }

  const removeRecentSearch = (index, e) => {
    e.stopPropagation()
    setRecentSearches((prev) => prev.filter((_, i) => i !== index))
  }

  const navItems = [
    {
      title: "ABOUT SLAAM",
      href: "/about", // Adjust to actual route
      type: "link",
    },
    {
      title: "VOTING",
      href: "/about",
      dropdown: [
        { title: "How to Vote", href: "/voting/how-to" },
        { title: "Eligibility", href: "/voting/eligibility" },
        { title: "Voting Timeline", href: "/voting/timeline" },
        { title: "FAQs", href: "/voting/faqs" },
      ],
    },
    {
      title: "LIFETIME HONOREES",
      href: "/initiatives",
      dropdown: [
        { title: "2024 Honorees", href: "/honorees/2024" },
        { title: "Past Honorees", href: "/honorees/past" },
        { title: "Selection Process", href: "/honorees/selection" },
        { title: "Nominate", href: "/honorees/nominate" },
      ],
    },
    {
      title: "PHOTO GALLERY",
      href: "/resources",
      dropdown: [
        { title: "Event Photos", href: "/gallery/events" },
        { title: "Award Ceremonies", href: "/gallery/ceremonies" },
        { title: "Behind the Scenes", href: "/gallery/behind-scenes" },
        { title: "Press Photos", href: "/gallery/press" },
      ],
    },
    {
      title: "WINNERS",
      href: "/events",
      dropdown: [
        { title: "2024 Winners", href: "/winners/2024" },
        { title: "2023 Winners", href: "/winners/2023" },
        { title: "All-Time Winners", href: "/winners/all-time" },
        { title: "Categories", href: "/winners/categories" },
      ],
    },
    {
      title: "CONTACT US",
      href: "/contact",
      dropdown: [
        { title: "General Inquiries", href: "/contact/general" },
        { title: "Media Relations", href: "/contact/media" },
        { title: "Sponsorship", href: "/contact/sponsorship" },
        { title: "Careers", href: "/contact/careers" },
      ],
    },
  ]

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  }

  const searchVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  }

  return (
    <>
      <nav className="fixed top-0 left-0 w-full h-20 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-md">
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <a href="/"><img src="/images/logo.png" alt="Logo" className="h-12 w-auto bg-white/10 p-1 rounded-full" /></a>
          </div>

          <ul className="flex items-center gap-6 text-white font-medium text-sm lg:text-base">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  {item.type === "link" || !item.dropdown ? (
                    <a href={item.href} className="hover:underline">{item.title}</a>
                  ) : (
                    <>
                      <button className="focus:outline-none">{item.title}</button>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${activeDropdown === index ? "rotate-180" : ""}`}
                      />
                    </>
                  )}
                </div>

                <AnimatePresence>
                  {activeDropdown === index && item.dropdown && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="fixed left-0 top-20 w-full z-40 bg-white/95 shadow-lg backdrop-blur-md border-b border-white/30"
                    >
                      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-3 gap-4">
                        {item.dropdown.map((dropdownItem, idx) => (
                          <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="hover:bg-indigo-50 p-3 rounded transition"
                          >
                            <a
                              href={dropdownItem.href}
                              className="text-gray-800 hover:text-indigo-600 flex justify-between items-center"
                            >
                              {dropdownItem.title}
                              <ArrowRight size={14} />
                            </a>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}

            <li>
              <button
                onClick={() => setShowSearch((prev) => !prev)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition"
              >
                <Search size={18} />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Search Dropdown */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            variants={searchVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed top-20 left-0 w-full z-40 bg-white/95 backdrop-blur-md border-b border-white/30 shadow-md"
          >
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && searchValue.trim()) {
                      handleSearch(searchValue)
                    }
                  }}
                  placeholder="Search the site..."
                  className="w-full p-3 pl-12 rounded-xl bg-white/80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 shadow-sm"
                  autoFocus
                />
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 font-medium">
                    <TrendingUp size={18} />
                    <h3>Popular Searches</h3>
                  </div>
                  <ul className="space-y-1">
                    {suggestions.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2.5 bg-white hover:bg-indigo-50 rounded-lg cursor-pointer transition flex justify-between group"
                        onClick={() => handleSearch(item)}
                      >
                        <span className="text-gray-800">{item}</span>
                        <ArrowRight
                          size={16}
                          className="text-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2 text-indigo-600 font-medium">
                    <Clock size={18} />
                    <h3>Recent Searches</h3>
                  </div>
                  <ul className="space-y-1">
                    {recentSearches.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="px-4 py-2.5 bg-white hover:bg-indigo-50 rounded-lg transition flex justify-between items-center"
                        onClick={() => handleSearch(item)}
                      >
                        <span className="text-gray-800">{item}</span>
                        <button
                          className="text-gray-400 hover:text-gray-600"
                          onClick={(e) => removeRecentSearch(index, e)}
                        >
                          ×
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {searchValue && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-4 p-4 bg-indigo-50 rounded-lg cursor-pointer"
                  onClick={() => handleSearch(searchValue)}
                >
                  <p className="text-indigo-700 font-medium">Press Enter to search for "{searchValue}"</p>
                </motion.div>
              )}

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowSearch(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
