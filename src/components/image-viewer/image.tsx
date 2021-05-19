import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

interface Props {
  src: string;
  alt?: string;
}

export const Image = ({ src, alt }: Props) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  return (
    <>
      <img
        className="cursor-pointer"
        src={src}
        onClick={() => setIsViewerOpen(true)}
        alt={alt}
      />
      {isViewerOpen && (
        <Lightbox
          mainSrc={src}
          onCloseRequest={() => setIsViewerOpen(false)}
          enableZoom={false}
          imagePadding={48}
        />
      )}
    </>
  );
};
