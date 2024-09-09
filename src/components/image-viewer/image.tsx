import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

interface Props {
  src: string;
  alt?: string;
}

const pStyle = {
  color: '#a9a9a9',
  fontSize: '14px',
  marginBottom: '15px'
};

const imgStyle = {
  width: '400px',
  marginBottom: '10px'
}

export const Image = ({ src, alt }: Props) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <img
        className="cursor-pointer"
        src={useBaseUrl(src)}
        onClick={() => setIsViewerOpen(true)}
        alt={alt}
        style={imgStyle}
      />
      {isViewerOpen && (
        <Lightbox
          mainSrc={useBaseUrl(src)}
          onCloseRequest={() => setIsViewerOpen(false)}
          enableZoom={false}
          imagePadding={48}
        />
      )}
      <p
        style={pStyle}
      >
        {alt}
      </p>
    </div>
  );
};
