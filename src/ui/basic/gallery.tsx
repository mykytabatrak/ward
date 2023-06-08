'use client';

import Image from 'next/image';

export function Gallery({
  images,
}: {
  images: { src: string; width: number; height: number }[];
}) {
  return (
    <div className="grid aspect-[3/2] grid-cols-2 grid-rows-2 gap-2">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="relative overflow-hidden rounded-lg"
        >
          <Image src={image.src} alt="" fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}
