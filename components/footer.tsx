import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-white border-t py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-[#0A2540] uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Security
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#0A2540] uppercase mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  What's New
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Embedded Bookkeeping
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#0A2540] uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Education
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-[#0A2540] uppercase mb-4">Partners</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Refer A Friend
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  Partner Marketplace
                </Link>
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="font-bold text-[#0A2540] mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#0A2540]">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-gray-600">© 2024 Bench. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

