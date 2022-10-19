import { Gallery, GalleryItem } from './Gallery.styled';
import { ImageGalleryItem } from './ImageGalleryItem';

export const ImageGallery = ({ data }) => {
  return (
    <>
      <Gallery>
        {data &&
          data.map(data => {
            return (
              <GalleryItem key={data.id}>
                <ImageGalleryItem data={data} />
              </GalleryItem>
            );
          })}
      </Gallery>
    </>
  );
};
