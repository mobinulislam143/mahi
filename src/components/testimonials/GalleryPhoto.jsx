import React from "react"
import { Gallery } from "react-grid-gallery";
import './GalleryPhoto.css'

const GalleryPhoto = () => {

const images = [
   {
      src: "https://i.postimg.cc/66Gmgmrd/001.jpg",
      width: 450,
      height: 280,
      isSelected: true,
      caption: "After Rain (Jeshu John - designerspics.com)",
       tags: [
         { value: "Red Crisent Team", title: "Ocean" },
      ],
   },
   {
      src: "https://i.postimg.cc/c4ybSBhP/002.jpg",
      width: 450,
      height: 280,
      tags: [
         { value: "Red Crisent Team", title: "Ocean" },
      ],
      alt: "Boats (Jeshu John - designerspics.com)",
   },
   {
      src: "https://i.postimg.cc/903Jccdy/005.jpg",
      width: 450,
      height: 280,
      tags: [
         { value: "Cyclone Remal", title: "Ocean" },
      ],
   },
   {
      src: "https://i.postimg.cc/CLgmtLLg/008.jpg",
      width: 450,
      height: 380,
      tags: [
         { value: "Cyclone Remal", title: "Ocean" },
      ],
   },
   {
      src: "https://i.postimg.cc/K8cQGqMp/011.jpg",
      width: 450,
      height: 280,
      tags: [
         { value: "Kate Forbes", title: "Ocean" },
         { value: "Chairment of Red Crisent", title: "Ocean" },
      ],
   },
   {
      src: "https://i.postimg.cc/sXW46bkx/009.jpg",
      width: 450,
      height: 420,
     
   },
   {
      src: "https://i.postimg.cc/44z1zkvF/010.jpg",
      width: 450,
      height: 280,
   },
];
  return (
    <div className="containers">
      <h1 style={{textAlign: 'center', paddingTop:'15px', fontWeight: 'bold'}}>Photo Gallery</h1>
      <p style={{textAlign: 'center', paddingBottom:'15px'}}>Attend in Red Crisent Organization.</p>
      <Gallery images={images} />
    </div>
  )
};

export default GalleryPhoto
