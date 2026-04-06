// import React, { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [mobileUserOpen, setMobileUserOpen] = useState(false);

//   return (
//     <nav className="bg-gray-900 text-white shadow-md">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
//         {/* Logo */}
//         <h1 className="text-lg font-bold">FOSSEE Workshops</h1>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex items-center space-x-6">
//           <a href="#" className="hover:text-blue-400">
//             Home
//           </a>
//           <a href="#" className="hover:text-blue-400">
//             Statistics
//           </a>
//           <a href="#" className="hover:text-blue-400">
//             Status
//           </a>
//           <a href="#" className="hover:text-blue-400">
//             Propose
//           </a>
//           <a href="#" className="hover:text-blue-400">
//             Types
//           </a>

//           {/* User Dropdown */}
//           <div className="relative">
//             <button
//               onClick={() => setDropdown(!dropdown)}
//               className="flex items-center gap-2 hover:text-blue-400"
//             >
//               👤 <span>User</span>
//             </button>

//             {dropdown && (
//               <div className="absolute right-0 mt-2 w-44 bg-white text-black rounded-lg shadow-lg py-2 z-50">
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Profile
//                 </a>
//                 <a href="#" className="block px-4 py-2 hover:bg-gray-100">
//                   Change Password
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-red-500 hover:bg-gray-100"
//                 >
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Mobile Button */}
//         <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
//           ☰
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="md:hidden px-4 pb-4 space-y-3 bg-gray-800">
//           <a href="#" className="block hover:text-blue-400">
//             Home
//           </a>
//           <a href="#" className="block hover:text-blue-400">
//             Statistics
//           </a>
//           <a href="#" className="block hover:text-blue-400">
//             Status
//           </a>
//           <a href="#" className="block hover:text-blue-400">
//             Propose
//           </a>
//           <a href="#" className="block hover:text-blue-400">
//             Types
//           </a>

//           {/* Mobile User Section */}
//           <div className="border-t border-gray-600 pt-3">
//             {/* User Button */}
//             <button
//               onClick={() => setMobileUserOpen(!mobileUserOpen)}
//               className="flex items-center justify-between w-full px-2 py-2 bg-gray-700 rounded-md"
//             >
//               <span className="flex items-center gap-2">
//                 👤 <span className="text-sm font-medium">User</span>
//               </span>
//               <span>{mobileUserOpen ? "▲" : "▼"}</span>
//             </button>

//             {/* Dropdown Options */}
//             {mobileUserOpen && (
//               <div className="mt-2 space-y-1">
//                 <a
//                   href="#"
//                   className="block px-3 py-2 rounded-md hover:bg-gray-600 transition"
//                 >
//                   Profile
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 rounded-md hover:bg-gray-600 transition"
//                 >
//                   Change Password
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-3 py-2 rounded-md text-red-400 hover:bg-gray-600 transition"
//                 >
//                   Logout
//                 </a>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const navLinks = ["Home", "Statistics", "Status", "Propose", "Types"];

  return (
    <nav className="bg-slate-900 text-slate-100">
      <div className="max-w-5xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="text-[15px] font-medium">
            FOSSEE <span className="text-indigo-400">Workshops</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a key={link} href="#" className="px-3 py-1.5 rounded-md text-[13.5px] text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors">
              {link}
            </a>
          ))}

          {/* User Badge */}
          <div className="relative ml-2" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full border transition-all ${
                dropdownOpen
                  ? "border-indigo-500 bg-indigo-500/10"
                  : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/8"
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-[11px] font-medium">AK</div>
              <span className="text-[13px] text-slate-200">Arjun K.</span>
              <svg className={`w-3.5 h-3.5 text-slate-500 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-56 bg-slate-800 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50">
                <div className="flex items-center gap-2.5 px-4 py-3.5 border-b border-white/[0.07]">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-[13px] font-medium shrink-0">AK</div>
                  <div>
                    <p className="text-[13.5px] font-medium text-slate-100">Arjun Kumar</p>
                    <p className="text-[11.5px] text-slate-500">arjun@fossee.in</p>
                  </div>
                </div>

                {[
                  { label: "My profile", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" },
                  { label: "Change password", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
                  { label: "My submissions", icon: "M18 20V10M12 20V4M6 20v-6" },
                ].map(({ label, icon }) => (
                  <a key={label} href="#" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-slate-400 hover:text-slate-100 hover:bg-white/[0.05] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <path d={icon} />
                    </svg>
                    {label}
                  </a>
                ))}

                <div className="h-px bg-white/[0.07] my-1" />
                <a href="#" className="flex items-center gap-2.5 px-4 py-2.5 text-[13px] text-red-400 hover:text-red-300 hover:bg-red-400/[0.08] transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
                  </svg>
                  Sign out
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-1.5 rounded-md text-slate-400 hover:bg-white/5 hover:text-slate-100" onClick={() => setMobileOpen(!mobileOpen)}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" viewBox="0 0 24 24">
            <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/[0.07]">
          <div className="px-4 py-2">
            {navLinks.map((link) => (
              <a key={link} href="#" className="block px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors">{link}</a>
            ))}
          </div>
          <div className="border-t border-white/[0.07]">
            <div className="flex items-center gap-2.5 px-5 py-3.5">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center text-sm font-medium shrink-0">AK</div>
              <div>
                <p className="text-[13.5px] font-medium text-slate-100">Arjun Kumar</p>
                <p className="text-[11.5px] text-slate-500">arjun@fossee.in</p>
              </div>
            </div>
            <div className="px-4 pb-3 space-y-0.5">
              {["My profile", "Change password", "My submissions"].map((item) => (
                <a key={item} href="#" className="block px-3 py-2.5 rounded-lg text-sm text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors">{item}</a>
              ))}
              <a href="#" className="block px-3 py-2.5 rounded-lg text-sm text-red-400 hover:text-red-300 hover:bg-red-400/[0.08] transition-colors">Sign out</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
