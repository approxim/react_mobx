// import React, { useEffect } from 'react';
// import { observer } from 'mobx-react-lite';
// import photoStore from '../../stores/photo-store.tsx';
// import PhotoItem from './PhotoItem.tsx';


// const PhotoPage = observer(() => {

//   useEffect(() => {
//     const fetchData = async () => {
//       await photoStore.fetchData();
//     }
//     fetchData();
//   }, []);


//   if (photoStore.data.length > 0) {
//     return (
//       <div>
//         <h1>Photo</h1>
//         <ul>
//           {photoStore.data.map((photo) => (
//             <PhotoItem
//               key={photo.id}
//               cropPhoto={photo.thumbnailUrl}
//               title={photo.title}
//               url={photo.url}
//             />
//           )
//           )}
//         </ul>
//       </div>
//     )
//   }
// })

// export default PhotoPage
