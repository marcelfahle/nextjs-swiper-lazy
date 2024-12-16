"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Demo image arrays (using picsum for demo purposes)
const firstCarouselImages = Array.from(
  { length: 10 },
  (_, i) => `https://picsum.photos/seed/${i + 1}/800/400`
);
const secondCarouselImages = Array.from(
  { length: 10 },
  (_, i) => `https://picsum.photos/seed/${i + 11}/800/400`
);
const thirdCarouselImages = Array.from(
  { length: 10 },
  (_, i) => `https://picsum.photos/seed/${i + 21}/800/400`
);

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-20">
      {/* Introduction */}
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">
          Next.js Image Lazy Loading with Swiper Demo
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          This demo shows how Next.js Image and Swiper share the same native{" "}
          <code className="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded">
            loading=&quot;lazy&quot;
          </code>{" "}
          API, making them work together seamlessly for optimal performance.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-8">
          <li>Both components respect the native lazy loading attribute</li>
          <li>No additional configuration needed - it just works</li>
          <li>Images load automatically as they enter the viewport</li>
          <li>
            Scroll down to see lazy loading in action across multiple carousels
          </li>
        </ul>

        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">
            Implementation Example:
          </h3>
          <pre className="overflow-x-auto text-sm bg-white dark:bg-gray-900 p-4 rounded">
            <code>{`<SwiperSlide key={index}>
  <div className="relative aspect-[2/1] w-full">
    <Image
      src={src}
      alt={\`Slide \${index + 1}\`}
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, 800px"
      loading="lazy"
    />
  </div>
</SwiperSlide>`}</code>
          </pre>
        </div>
      </div>

      {/* First Carousel */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">First Carousel</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-4xl mx-auto"
        >
          {firstCarouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Second Carousel */}
      <section className="p-8 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-2xl font-bold mb-6">Second Carousel</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-4xl mx-auto"
        >
          {secondCarouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Third Carousel */}
      <section className="p-8">
        <h2 className="text-2xl font-bold mb-6">Third Carousel</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full max-w-4xl mx-auto"
        >
          {thirdCarouselImages.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative aspect-[2/1] w-full">
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 800px"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
}
