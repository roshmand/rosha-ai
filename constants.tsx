import React from 'react';

export const GALLERY_IMAGES = [
  { src: 'https://picsum.photos/seed/shampoo/600/800', alt: 'Shampoo Ad', seconds: 12 },
  { src: 'https://picsum.photos/seed/watch/600/800', alt: 'Watch Ad', seconds: 15 },
  { src: 'https://picsum.photos/seed/shoes/600/800', alt: 'Sneaker Ad', seconds: 10 },
  { src: 'https://picsum.photos/seed/gadget/600/800', alt: 'Gadget Ad', seconds: 18 },
  { src: 'https://picsum.photos/seed/perfume/600/800', alt: 'Perfume Ad', seconds: 9 },
  { src: 'https://picsum.photos/seed/bag/600/800', alt: 'Handbag Ad', seconds: 14 },
];

// SVG Icons
export const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.536l12.232-12.232z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5l-4-4m4 4l-4 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5h15" />
    </svg>
);

export const ProductIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
);

export const BoltIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

export const UploadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
);