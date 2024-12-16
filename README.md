# Next.js Image Lazy Loading with Swiper Demo

This demo proves that Next.js Image and Swiper work well together using the same `loading="lazy"` API. Scroll down to see how images load only when you need them.

🔗 **[View Demo](https://lazy-carousel.marcelfahle.net)**

## Key Features

- Images load when you scroll to them
- Works with multiple carousels
- Handles different screen sizes well
- Looks good in dark mode 🤣

## Implementation Example

```jsx
<SwiperSlide key={index}>
  <div className="relative aspect-[2/1] w-full">
    <Image
      src={src}
      alt={`Slide ${index + 1}`}
      fill
      className="object-cover rounded-lg"
      sizes="(max-width: 768px) 100vw, 800px"
      loading="lazy"  {/* ← Native lazy loading API */}
    />
  </div>
</SwiperSlide>
```

## Getting Started

First, install the dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- [Next.js 15](https://nextjs.org)
- [Swiper](https://swiperjs.com)
- [Tailwind CSS](https://tailwindcss.com)

## About

Created by [Marcel Fahle](https://marcelfahle.net) | [Bold Video](https://bold.video)
