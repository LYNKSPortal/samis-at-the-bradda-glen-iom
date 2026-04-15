'use client';

import Hero from '@/components/ui/Hero';
import Section from '@/components/ui/Section';
import { useState, useEffect } from 'react';

const galleryImages = [
  { id: 1, src: '/gallery/gallery-img-10.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 2, src: '/gallery/gallery-img-01.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 3, src: '/gallery/gallery-img-02.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 4, src: '/gallery/gallery-img-03.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 5, src: '/gallery/gallery-img-04.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 6, src: '/gallery/gallery-img-05.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 7, src: '/gallery/gallery-img-06.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 8, src: '/gallery/gallery-img-07.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 9, src: '/gallery/gallery-img-08.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 10, src: '/gallery/gallery-img-09.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 11, src: '/gallery/gallery-img-11.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 12, src: '/gallery/gallery-img-12.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 13, src: '/gallery/gallery-img-13.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 14, src: '/gallery/gallery-img-14.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 15, src: '/gallery/gallery-img-15.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 16, src: '/gallery/gallery-img-16.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 17, src: '/gallery/gallery-img-17.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 18, src: '/gallery/gallery-img-18.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 19, src: '/gallery/gallery-img-19.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 20, src: '/gallery/gallery-img-20.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 21, src: '/gallery/gallery-img-21.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 22, src: '/gallery/gallery-img-22.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 23, src: '/gallery/gallery-img-23.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 24, src: '/gallery/gallery-img-24.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 25, src: '/gallery/gallery-img-25.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 26, src: '/gallery/gallery-img-27.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 28, src: '/gallery/gallery-img-28.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 29, src: '/gallery/gallery-img-29.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 30, src: '/gallery/gallery-img-30.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
  { id: 31, src: '/gallery/gallery-img-31.jpg', category: 'all', alt: "Sami's at the Bradda Glen" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [shuffledImages, setShuffledImages] = useState<typeof galleryImages>([]);

  // Shuffle images on mount
  useEffect(() => {
    const shuffled = [...galleryImages].sort(() => Math.random() - 0.5);
    setShuffledImages(shuffled);
  }, []);

  const filteredImages = filter === 'all' 
    ? shuffledImages.length > 0 ? shuffledImages : galleryImages
    : shuffledImages.filter(img => img.category === filter);

  return (
    <>
      <Hero
        title="Gallery"
        subtitle="A Visual Journey"
        description="Explore the beauty of Sami's - from our exquisite dishes to our stunning venue and breathtaking views"
        height="medium"
        imagePath="/the-restaurant.jpg"
      />

      <div className="bg-white py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer group"
              onClick={() => setSelectedImage(image.id)}
            >
              <div
                className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <div
            className="max-w-5xl max-h-[90vh] bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${galleryImages.find(img => img.id === selectedImage)?.src})`,
              width: '100%',
              height: '80vh',
            }}
          />
        </div>
      )}
    </>
  );
}
