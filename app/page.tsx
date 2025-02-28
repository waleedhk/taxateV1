import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Shield } from "lucide-react"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { HeroCarousel } from "@/components/hero-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Announcement Banner */}
      <div className="bg-[#0A2540] text-white text-center py-2 text-sm">
        Exciting news! Bench has been acquired by Employer.com!{" "}
        <Link href="#" className="underline">
          Learn More →
        </Link>
      </div>

      <NavBar />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Social Proof Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-lg font-medium text-gray-700 mb-6">Over 1 million months of completed books</p>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div>
              <p className="text-lg font-bold text-[#0A2540]">4.7 average rating on Capterra</p>
            </div>
            <div>
              <p className="text-lg font-bold text-[#0A2540]">4.4 average rating on G2</p>
            </div>
          </div>
          <p className="text-xl font-medium text-[#0A2540] mb-12">Trusted by 35,000+ American small business owners</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Bench helps keep my business finances crystal clear. No more guessing, no more fumbling around in Excel sheets."
              name="JUSTIN METROS"
              title="PROPRIETOR, RADIATOR"
            />
            <TestimonialCard
              quote="Now that Bench has a tax solution service, they're a 'one stop shop' for small businesses to manage their books and taxes."
              name="ALBERT LAMONT"
              title="CEO, SWEATCAST"
            />
            <TestimonialCard
              quote="As a small business owner, I feel better knowing that professionals are handling my books so I can spend more time growing my business instead of monitoring nickels."
              name="LAURA SIMMS"
              title="CAREER CHANGE EXPERT"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Small business bookkeeping year-round</h2>
          <p className="text-lg text-gray-700 mb-12">
            Real humans. Perfect books. That's what you get when Bench is on your books. Every month, your team of
            bookkeeping experts review your transactions and prepare financial statements. Here's what else you can
            expect:
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">One-on-one expert support</h3>
              <p className="text-lg text-gray-700 mb-6">
                Bench gives you a dedicated bookkeeping team so you have a direct line to your own experts on desktop or
                mobile—professional support is just a few swipes, taps, or clicks away.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-[#0A2540] font-medium">
                  LEARN MORE
                </Link>
                <Link href="#" className="text-[#0A2540] font-medium">
                  BOOK A CALL
                </Link>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Mobile chat interface"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Financial reporting dashboard"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Powerful financial reporting</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Bench platform gives you monthly financial statements and expense overviews to keep you in control
                of your money. At-a-glance visual reports help you see the big picture and give you actionable insights
                to help you grow your business. You'll never be in the dark again.
              </p>
              <Link href="#" className="text-[#0A2540] font-medium">
                LEARN MORE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Testimonials */}
      <section className="bg-white py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-12 text-center">What our customers are saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                "Bench has been a lifesaver for our small business. Their team is incredibly responsive and helpful, and
                they've made managing our finances so much easier."
              </p>
              <p className="font-bold text-[#0A2540]">Sarah J., Owner, The Little Bakery</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 mb-4 italic">
                "I used to dread tax season, but Bench has taken all the stress out of it. I highly recommend them to
                any small business owner."
              </p>
              <p className="font-bold text-[#0A2540]">John B., Owner, Green Thumb Landscaping</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-[#0A2540] mb-4">Ready to simplify your finances?</h3>
            <p className="text-lg text-gray-700 mb-6">Get started today with a free consultation.</p>
            <Button className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white px-8 py-6 text-lg rounded-md">
              GET STARTED
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A2540] mb-8">Frequently Asked Questions</h2>
          <div className="mb-6 text-right">
            <Link href="#" className="text-[#0A2540] font-medium">
              More FAQs
            </Link>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg font-medium text-[#0A2540]">
                Does Bench do all my bookkeeping tasks for me?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Yes, Bench handles all your bookkeeping tasks. Our team of expert bookkeepers will categorize your
                transactions, reconcile your accounts, and prepare your financial statements each month.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg font-medium text-[#0A2540]">
                What happens if I take a long time to respond to my Bench team's requests for information?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                We understand you're busy. Your Bench team will follow up with gentle reminders, but your books may be
                delayed if we're missing critical information. We're always here to help when you're ready.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg font-medium text-[#0A2540]">
                Is it mandatory to connect my business accounts to Bench?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                While not mandatory, connecting your accounts makes the bookkeeping process much more efficient. You can
                also upload statements manually if you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg font-medium text-[#0A2540]">
                Why does Bench still need me to upload documents even if my accounts are connected?
              </AccordionTrigger>
              <AccordionContent className="text-gray-700">
                Some transactions require additional documentation for proper categorization and tax purposes. This
                ensures your books are accurate and audit-ready.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#0A2540] text-white py-16 px-4 md:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-8 w-8 mr-2" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Online bookkeeping and tax filing powered by real humans</h2>
          <p className="text-xl mb-8">Join thousands of small business owners who trust Bench with their books</p>
          <p className="mb-8">
            Sign up today and we'll do one prior month of your bookkeeping and prepare a set of financial statements for
            free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#0A2540] hover:bg-gray-100 px-8 py-6 text-lg rounded-md">
              GET STARTED
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-md"
            >
              BOOK A DEMO
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function TestimonialCard({ quote, name, title }) {
  return (
    <div className="bg-gray-50 p-8 rounded-lg flex flex-col h-full">
      <div className="flex-1">
        <p className="text-lg text-gray-700 mb-6">"{quote}"</p>
      </div>
      <div>
        <div className="flex items-center gap-4">
          <div className="bg-gray-200 rounded-full w-12 h-12"></div>
          <div>
            <p className="font-bold text-[#0A2540]">{name}</p>
            <p className="text-sm text-gray-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

