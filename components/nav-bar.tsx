"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#0A2540]">
              Bench
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#0A2540]">
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Bookkeeping
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Tax Filing
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Financial Planning
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#0A2540]">
                  Platform <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Features
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Integrations
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Security
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#" className="text-gray-700 hover:text-[#0A2540]">
              Pricing
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#0A2540]">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Blog
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Guides
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Tools
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-gray-700 hover:text-[#0A2540]">
                  About us <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Our Story
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Team
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#" className="w-full">
                    Careers
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#" className="text-gray-700 hover:text-[#0A2540] font-medium">
              Log in
            </Link>
            <Button className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white">GET STARTED</Button>
            <Button variant="outline" className="border-[#0A2540] text-[#0A2540]">
              Book a demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" className="text-gray-700" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              Services
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              Platform
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              Pricing
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              Resources
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              About us
            </Link>
            <Link href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-[#0A2540]">
              Log in
            </Link>
            <div className="pt-4 flex flex-col gap-2">
              <Button className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white w-full">GET STARTED</Button>
              <Button variant="outline" className="border-[#0A2540] text-[#0A2540] w-full">
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

