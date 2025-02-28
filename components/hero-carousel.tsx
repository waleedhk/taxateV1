"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

const carouselSlides = [
  {
    id: 1,
    title: "Accurate financials.\nTotal peace of mind.",
    description:
      "Bench helps small business owners like you save time and money doing your bookkeeping and income taxes by providing dedicated experts and easy-to-use financial software—so you can focus on growing your business.",
    cta: "Get your free month of bookkeeping today.",
    image: "/placeholder.svg?height=500&width=600",
    chatBubble: {
      message: "Hey! Jess here. Your year-end financials are ready—do you need help with tax filing too?",
      reply: "Thanks so much! Yes, help with taxes would be a lifesaver!",
    },
  },
  {
    id: 2,
    title: "It's Tax time!",
    subtitle: "File your taxes by a professional accountant now!",
    description:
      "Don't stress about tax season. Our team of expert accountants will handle your tax filing with precision and care, ensuring you maximize deductions and minimize stress.",
    cta: "Get started with tax filing today.",
    image: "/placeholder.svg?height=500&width=600",
    chatBubble: {
      message: "Hi there! I'm Mark, your tax expert. Ready to make this tax season stress-free?",
      reply: "I've been dreading doing this myself.",
    },
  },
  {
    id: 3,
    title: "Real-time financial insights.",
    subtitle: "Make better business decisions.",
    description:
      "Access your financial data anytime, anywhere. Our intuitive dashboard gives you a clear picture of your business's financial health at a glance.",
    cta: "See how our platform works.",
    image: "/placeholder.svg?height=500&width=600",
    chatBubble: {
      message: "Emma here! I noticed your revenue is up 15% this month. Want to review what's working?",
      reply: "That's great news! Yes, let's discuss what's driving the growth.",
    },
  },
]

export function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = carouselSlides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slide = carouselSlides[currentSlide]

  return (
    <section className="bg-white py-16 px-4 md:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-2 whitespace-pre-line">{slide.title}</h1>
            {slide.subtitle && (
              <h2 className="text-2xl md:text-3xl font-semibold text-[#0A2540] mb-4">{slide.subtitle}</h2>
            )}
            <p className="text-lg text-gray-700 mb-8">{slide.description}</p>
            <p className="font-medium mb-6">{slide.cta}</p>
            <Button className="bg-[#0A2540] hover:bg-[#0A2540]/90 text-white px-8 py-6 text-lg rounded-md">
              GET STARTED
            </Button>
          </div>
          <div className="relative">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt="Bench dashboard"
              width={600}
              height={500}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <div className="flex gap-3">
                <div className="bg-[#0A2540] rounded-full w-10 h-10 flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold">{slide.chatBubble.message}</span>
                  </p>
                  <p className="text-sm text-gray-700 mt-2 bg-gray-100 p-2 rounded-lg">{slide.chatBubble.reply}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={prevSlide}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-[#0A2540]" />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={nextSlide}
          className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-[#0A2540]" />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full transition-colors ${
              currentSlide === index ? "bg-[#0A2540]" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

