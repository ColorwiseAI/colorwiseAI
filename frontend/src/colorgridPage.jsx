// // import React, { useState } from "react";

// // function ColorGridPage() {
// //   return (
// // //    <>
// // // <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
// // //   <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center sm:text-left">
// // //   Based on the tones in your uploaded image, we’ve put together six color recommendations that could complement your skin tone beautifully  </h3>
  
// // //   <div className="bg-gray-100 rounded-lg shadow-lg p-6 sm:p-8">
// // //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-red-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 1</p>
// // //       </div>
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-blue-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 2</p>
// // //       </div>
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-yellow-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 3</p>
// // //       </div>
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-purple-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 4</p>
// // //       </div>
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-pink-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 5</p>
// // //       </div>
// // //       <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:scale-105">
// // //         <div className="h-24 bg-green-400 rounded-md mb-2"></div>
// // //         <p className="text-center font-medium text-gray-700">Color 6</p>
// // //       </div>
// // //     </div>
// // //   </div>
// // // </div>
// //     <>
// //     <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
// //   <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
// // Colorwise AI  </h2>
  
// //   <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
// //   Based on the tones in your uploaded image, we’ve put together six color recommendations that could complement your skin tone beautifully.
// //   </p>
  
// //   <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
// //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //       {[
// //         { color: 'red-400', name: 'Coral Blush' },
// //         { color: 'blue-400', name: 'Ocean Blue' },
// //         { color: 'yellow-400', name: 'Sunflower Yellow' },
// //         { color: 'purple-400', name: 'Lavender Mist' },
// //         { color: 'pink-400', name: 'Rose Petal' },
// //         { color: 'green-400', name: 'Mint Leaf' },
// //       ].map((item, index) => (
// //         <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
// //           <div className={`h-32 bg-${item.color}`}></div>
// //           <div className="p-4">
// //             <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
// //             {/* <p className="text-center text-gray-600 text-sm mt-1">Color {index + 1}</p> */}
// //           </div>
// //         </div>
// //       ))}
// //     </div>
// //   </div>
// // </div>
// //    </>
     
// //   );
// // }

// // export default ColorGridPage;

// import React, { useState } from "react";

// function App() {
//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result);
//       // You might want to update the state with the result here
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             setShowColorGrid(true);
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="w-full max-w-2xl mx-auto p-10 space-y-6 bg-white rounded-lg shadow-lg mb-12">
//           <div className="flex flex-col items-center justify-center space-y-6">
//             <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//               <input
//                 id="file-upload"
//                 type="file"
//                 multiple
//                 className="hidden"
//                 onChange={handleFileChange}
//               />
//               <label
//                 htmlFor="file-upload"
//                 className="block text-sm font-medium text-gray-700 cursor-pointer"
//               >
//                 <svg
//                   className="mx-auto h-12 w-12 text-gray-400"
//                   stroke="currentColor"
//                   fill="none"
//                   viewBox="0 0 48 48"
//                   aria-hidden="true"
//                 >
//                   <path
//                     d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 <span className="text-blue-600">Click to upload</span> or drag and drop
//               </label>
//             </div>

//             {selectedFiles.length > 0 && (
//               <div className="w-full space-y-2">
//                 {selectedFiles.map((file, index) => (
//                   <div key={index} className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <img
//                         src={URL.createObjectURL(file)}
//                         alt={file.name}
//                         className="w-20 h-20 object-cover rounded-md"
//                       />
//                       <span className="text-sm text-gray-700">{file.name}</span>
//                     </div>
//                     <button
//                       className="text-red-600 hover:underline text-sm"
//                       onClick={() => handleRemoveImage(index)}
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {isUploading && (
//               <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                 <div
//                   className="bg-blue-600 h-2.5 rounded-full"
//                   style={{ width: `${uploadProgress}%` }}
//                 ></div>
//               </div>
//             )}

//             <button
//               onClick={handleUpload}
//               className={`w-full py-3 px-6 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                 isUploading || selectedFiles.length === 0
//                   ? "opacity-50 cursor-not-allowed"
//                   : ""
//               }`}
//               disabled={isUploading || selectedFiles.length === 0}
//             >
//               {isUploading ? "Uploading..." : "Upload Files"}
//             </button>
//           </div>
//         </div>

//         {showColorGrid && (
//           <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { color: 'red-400', name: 'Coral Blush' },
//                   { color: 'blue-400', name: 'Ocean Blue' },
//                   { color: 'yellow-400', name: 'Sunflower Yellow' },
//                   { color: 'purple-400', name: 'Lavender Mist' },
//                   { color: 'pink-400', name: 'Rose Petal' },
//                   { color: 'green-400', name: 'Mint Leaf' },
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div className={`h-32 bg-${item.color}`}></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// // export default App;
// import React, { useState } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-blue-500 text-white py-1 px-3   rounded-lg focus:outline-none"
//             >
//               {isUploaderOpen ? "Hide Image Uploader" : "Show Image Uploader"}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { color: 'red-400', name: 'Coral Blush' },
//                   { color: 'blue-400', name: 'Ocean Blue' },
//                   { color: 'yellow-400', name: 'Sunflower Yellow' },
//                   { color: 'purple-400', name: 'Lavender Mist' },
//                   { color: 'pink-400', name: 'Rose Petal' },
//                   { color: 'green-400', name: 'Mint Leaf' },
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div className={`h-32 bg-${item.color}`}></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log(result);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {[
//                   { color: 'red-400', name: 'Coral Blush' },
//                   { color: 'blue-400', name: 'Ocean Blue' },
//                   { color: 'yellow-400', name: 'Sunflower Yellow' },
//                   { color: 'purple-400', name: 'Lavender Mist' },
//                   { color: 'pink-400', name: 'Rose Petal' },
//                   { color: 'green-400', name: 'Mint Leaf' },
//                 ].map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div className={`h-32 bg-${item.color}`}></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);
//   const [colorRecommendations, setColorRecommendations] = useState([]);

//   function rgbToHex(r, g, b) {
//     return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
//   }

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log("API Response:", result);

//       const colors = [
//         { name: "Complementary", rgb: result.recommendations.Complementary },
//         { name: "Analogous 1", rgb: result.recommendations["Analogous 1"] },
//         { name: "Analogous 2", rgb: result.recommendations["Analogous 2"] },
//         { name: "Analogous 3", rgb: result.recommendations["Analogous 3"] },
//         { name: "Analogous 4", rgb: result.recommendations["Analogous 4"] },
//         { name: "Analogous 5", rgb: result.recommendations["Analogous 5"] },
//       ];

//       const formattedColors = colors.map(color => ({
//         name: color.name,
//         hex: rgbToHex(...color.rgb)
//       }));

//       console.log("Formatted Colors:", formattedColors);
//       setColorRecommendations(formattedColors);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setColorRecommendations([]); // Reset color recommendations

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   useEffect(() => {
//     console.log("Color Recommendations Updated:", colorRecommendations);
//   }, [colorRecommendations]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {colorRecommendations.map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div className="h-32" style={{ backgroundColor: item.hex }}></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                       <p className="text-center text-gray-600 text-sm">{item.hex}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;
// import React, { useState, useEffect } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);
//   const [colorRecommendations, setColorRecommendations] = useState([]);

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log("API Response:", result);

//       const colors = [
//         { name: "Average Skin Color", rgb: result.recommendations["Average Skin Color"] },
//         { name: "Complementary", rgb: result.recommendations.Complementary },
//         { name: "Analogous 1", rgb: result.recommendations["Analogous 1"] },
//         { name: "Analogous 2", rgb: result.recommendations["Analogous 2"] },
//         { name: "Analogous 3", rgb: result.recommendations["Analogous 3"] },
//         { name: "Analogous 4", rgb: result.recommendations["Analogous 4"] },
//       ];

//       console.log("Formatted Colors:", colors);
//       console.log(colorRecommendations[0].rgb); // Outputs the RGB array for 'Average Skin Color'
//       setColorRecommendations(colors);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setColorRecommendations([]); // Reset color recommendations

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   useEffect(() => {
//     console.log("Color Recommendations Updated:", colorRecommendations);
//   }, [colorRecommendations]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the image you uploaded, we've identified your average skin tone and recommended complementary and analogous colors that could enhance your look.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {colorRecommendations.map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div 
//                       className="h-32" 
//                       style={{ backgroundColor: `rgb(${item.rgb.join(',')})` }}
//                     ></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                       <p className="text-center text-gray-600 text-sm">RGB({item.rgb.join(', ')})</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);
//   const [colorRecommendations, setColorRecommendations] = useState([]);

//   // Helper function to convert BGR to RGB
//   const convertBGRtoRGB = (bgrArray) => {
//     if (!bgrArray || bgrArray.length !== 3) return bgrArray; // Return as is if not a valid BGR array
//     const [b, g, r] = bgrArray;
//     return [r, g, b]; // Swap positions
//   };

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log("API Response:", result);

//       // Convert BGR to RGB for each color
//       const colors = [
       
//         {
//           name: "Complementary",
//           rgb: convertBGRtoRGB(result.recommendations.Complementary),
//         },
//         {
//           name: "Analogous 1",
//           rgb: convertBGRtoRGB(result.recommendations["Analogous 1"]),
//         },
//         {
//           name: "Analogous 2",
//           rgb: convertBGRtoRGB(result.recommendations["Analogous 2"]),
//         },
//         {
//           name: "Analogous 3",
//           rgb: convertBGRtoRGB(result.recommendations["Analogous 3"]),
//         },
//         {
//           name: "Analogous 4",
//           rgb: convertBGRtoRGB(result.recommendations["Analogous 4"]),
//         },
//         {
//           name: "Analogous 5",
//           rgb: convertBGRtoRGB(result.recommendations["Analogous 5"]),
//         },
//       ];

//       console.log("Formatted Colors:", colors);
//       setColorRecommendations(colors);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setColorRecommendations([]); // Reset color recommendations

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   useEffect(() => {
//     console.log("Color Recommendations Updated:", colorRecommendations);
//   }, [colorRecommendations]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop JPEG or PNG image
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-20 h-20 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//             Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>
            
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {colorRecommendations.map((item, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                     <div 
//                       className="h-32" 
//                       style={{ backgroundColor: `rgb(${item.rgb.join(',')})` }}
//                     ></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                       <p className="text-center text-gray-600 text-sm">RGB({item.rgb.join(', ')})</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);
//   const [colorRecommendations, setColorRecommendations] = useState([]);
//   const [skinColor, setSkinColor] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const convertBGRtoRGB = (bgrArray) => {
//     if (!bgrArray || bgrArray.length !== 3) return bgrArray;
//     const [b, g, r] = bgrArray;
//     return [r, g, b];
//   };

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       console.log("API Response:", result);

//       const skinColorRGB = convertBGRtoRGB(result.recommendations["Average Skin Color"]);
//       setSkinColor(skinColorRGB);
//       setUploadedImage(URL.createObjectURL(image));

//       const colors = [
//         { name: "Complementary", rgb: convertBGRtoRGB(result.recommendations.Complementary) },
//         { name: "Analogous 1", rgb: convertBGRtoRGB(result.recommendations["Analogous 1"]) },
//         { name: "Analogous 2", rgb: convertBGRtoRGB(result.recommendations["Analogous 2"]) },
//         { name: "Analogous 3", rgb: convertBGRtoRGB(result.recommendations["Analogous 3"]) },
//         { name: "Analogous 4", rgb: convertBGRtoRGB(result.recommendations["Analogous 4"]) },
//         { name: "Analogous 5", rgb: convertBGRtoRGB(result.recommendations["Analogous 5"]) },
//       ];

//       setColorRecommendations(colors);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setColorRecommendations([]);

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   useEffect(() => {
//     console.log("Color Recommendations Updated:", colorRecommendations);
//   }, [colorRecommendations]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>
//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center justify-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop JPEG or PNG image
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-14 h-14 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {uploadedImage && skinColor && (
//           <div className="flex justify-center items-center max-w-xl mx-auto mb-8 space-x-6">
//             <div className="flex-none">
//               <img
//                 src={uploadedImage}
//                 alt="Uploaded"
//                 className="w-28 h-28 object-cover rounded-lg shadow-md"
//               />
//             </div>
//             <div className="flex-none flex flex-col items-center">
//               <div
//                 className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
//                 style={{ backgroundColor: `rgb(${skinColor.join(",")})` }}
//               ></div>
//               <p className="mt-2 text-sm text-gray-700">Detected Skin Color</p>
//             </div>
//           </div>
//         )}

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>

//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {colorRecommendations.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
//                   >
//                     <div
//                       className="h-32"
//                       style={{ backgroundColor: `rgb(${item.rgb.join(",")})` }}
//                     ></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                       <p className="text-center text-gray-600 text-sm">RGB({item.rgb.join(", ")})</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";

// function App() {
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [isUploading, setIsUploading] = useState(false);
//   const [showColorGrid, setShowColorGrid] = useState(false);
//   const [isUploaderOpen, setIsUploaderOpen] = useState(true);
//   const [colorRecommendations, setColorRecommendations] = useState([]);
//   const [skinColor, setSkinColor] = useState(null);
//   const [uploadedImage, setUploadedImage] = useState(null);

//   const convertBGRtoRGB = (bgrArray) => {
//     if (!bgrArray || bgrArray.length !== 3) return bgrArray;
//     const [b, g, r] = bgrArray;
//     return [r, g, b];
//   };

//   async function processImage(image) {
//     const url = "http://192.168.1.19:8000/imageprocessing";
//     const formData = new FormData();
//     formData.append("file", image);

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         body: formData,
//       });
//       const result = await response.json();
//       // console.log("API Response:", result);

//       const skinColorRGB = convertBGRtoRGB(result.recommendations["Average Skin Color"]);
//       setSkinColor(skinColorRGB);
//       setUploadedImage(URL.createObjectURL(image));

//       const colors = [
//         { name: "Complementary", rgb: convertBGRtoRGB(result.recommendations.Complementary) },
//         { name: "Analogous 1", rgb: convertBGRtoRGB(result.recommendations["Analogous 1"]) },
//         { name: "Analogous 2", rgb: convertBGRtoRGB(result.recommendations["Analogous 2"]) },
//         { name: "Analogous 3", rgb: convertBGRtoRGB(result.recommendations["Analogous 3"]) },
//         { name: "Analogous 4", rgb: convertBGRtoRGB(result.recommendations["Analogous 4"]) },
//         { name: "Analogous 5", rgb: convertBGRtoRGB(result.recommendations["Analogous 5"]) },
//       ];

//       setColorRecommendations(colors);
//       setShowColorGrid(true);
//       setIsUploaderOpen(false);
//     } catch (error) {
//       console.error("Error processing image:", error);
//     }
//   }

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setSelectedFiles(files);
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length > 0) {
//       setIsUploading(true);
//       setUploadProgress(0);
//       setColorRecommendations([]);

//       const uploadInterval = setInterval(() => {
//         setUploadProgress((prevProgress) => {
//           if (prevProgress >= 100) {
//             clearInterval(uploadInterval);
//             setIsUploading(false);
//             selectedFiles.forEach((file) => {
//               processImage(file);
//             });
//             return 100;
//           }
//           return prevProgress + 10;
//         });
//       }, 300);
//     }
//   };

//   const handleRemoveImage = (index) => {
//     const newFiles = [...selectedFiles];
//     newFiles.splice(index, 1);
//     setSelectedFiles(newFiles);
//   };

//   const toggleUploader = () => {
//     setIsUploaderOpen(!isUploaderOpen);
//   };

//   useEffect(() => {
//     console.log("Color Recommendations Updated:", colorRecommendations);
//   }, [colorRecommendations]);

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
//           Colorwise AI
//         </h1>

//         <div className="mb-8">
//           <div className="flex justify-center">
//             <button
//               onClick={toggleUploader}
//               className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
//             >
//               {isUploaderOpen ? (
//                 <>
//                   <span className="mr-2">🔼</span>Hide Image Uploader
//                 </>
//               ) : (
//                 <>
//                   <span className="mr-2">🔽</span>Show Image Uploader
//                 </>
//               )}
//             </button>
//           </div>

//           {isUploaderOpen && (
//             <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
//               <div className="flex flex-col items-center space-y-6">
//                 <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
//                   <input
//                     id="file-upload"
//                     type="file"
//                     multiple
//                     className="hidden"
//                     onChange={handleFileChange}
//                   />
//                   <label
//                     htmlFor="file-upload"
//                     className="block text-sm font-medium text-gray-700 cursor-pointer"
//                   >
//                     <svg
//                       className="mx-auto h-12 w-12 text-gray-400"
//                       stroke="currentColor"
//                       fill="none"
//                       viewBox="0 0 48 48"
//                       aria-hidden="true"
//                     >
//                       <path
//                         d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <span className="text-blue-600">Click to upload</span> or drag and drop JPEG or PNG image
//                   </label>
//                 </div>

//                 {selectedFiles.length > 0 && (
//                   <div className="w-full space-y-2">
//                     {selectedFiles.map((file, index) => (
//                       <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg shadow-sm">
//                         <div className="flex items-center space-x-2">
//                           <img
//                             src={URL.createObjectURL(file)}
//                             alt={file.name}
//                             className="w-14 h-14 object-cover rounded-md"
//                           />
//                           <span className="text-sm text-gray-700">{file.name}</span>
//                         </div>
//                         <button
//                           className="text-red-600 hover:underline text-sm"
//                           onClick={() => handleRemoveImage(index)}
//                         >
//                           Remove
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {isUploading && (
//                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
//                     <div
//                       className="bg-blue-600 h-2.5 rounded-full"
//                       style={{ width: `${uploadProgress}%` }}
//                     ></div>
//                   </div>
//                 )}

//                 <div className="flex justify-center w-full">
//                   <button
//                     onClick={handleUpload}
//                     className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
//                       isUploading || selectedFiles.length === 0
//                         ? "opacity-50 cursor-not-allowed"
//                         : ""
//                     }`}
//                     disabled={isUploading || selectedFiles.length === 0}
//                   >
//                     {isUploading ? "Uploading..." : "Upload Files"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {uploadedImage && skinColor && (
//           <div className="flex justify-center items-center max-w-xl mx-auto mb-8 space-x-6">
//             <div className="flex-none">
//               <img
//                 src={uploadedImage}
//                 alt="Uploaded"
//                 className="w-28 h-28 object-cover rounded-lg shadow-md"
//               />
//             </div>
//             <div className="flex-none flex flex-col items-center">
//               <div
//                 className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
//                 style={{ backgroundColor: `rgb(${skinColor.join(",")})` }}
//               ></div>
//               <p className="mt-2 text-sm text-gray-700">Detected Skin Color</p>
//             </div>
//           </div>
//         )}

//         {showColorGrid && (
//           <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
//             <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
//               Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
//             </p>

//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {colorRecommendations.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
//                   >
//                     <div
//                       className="h-32"
//                       style={{ backgroundColor: `rgb(${item.rgb.join(",")})` }}
//                     ></div>
//                     <div className="p-4">
//                       <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
//                       <p className="text-center text-gray-600 text-sm">RGB({item.rgb.join(", ")})</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;

