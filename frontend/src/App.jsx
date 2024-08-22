
import React, { useState, useEffect } from "react";

function App() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [showColorGrid, setShowColorGrid] = useState(false);
  const [isUploaderOpen, setIsUploaderOpen] = useState(true);
  const [colorRecommendations, setColorRecommendations] = useState([]);
  const [skinColor, setSkinColor] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);  // Added state for loading

  const convertBGRtoRGB = (bgrArray) => {
    if (!bgrArray || bgrArray.length !== 3) return bgrArray;
    const [b, g, r] = bgrArray;
    return [r, g, b];
  };

  async function processImage(image) {
    const url = "http://192.168.1.33:8000/imageprocessing"; //change to the api address
    const formData = new FormData();
    formData.append("file", image);
    setIsLoading(true);  // Start loading

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      
      const skinColorRGB = convertBGRtoRGB(result.recommendations["Average Skin Color"]);
      setSkinColor(skinColorRGB);
      setUploadedImage(URL.createObjectURL(image));

      const colors = [
        { name: "Complementary", rgb: convertBGRtoRGB(result.recommendations.Complementary) },
        { name: "Harmony", rgb: convertBGRtoRGB(result.recommendations["Analogous 1"]) },
        { name: "Accent", rgb: convertBGRtoRGB(result.recommendations["Analogous 2"]) },
        { name: "Balance", rgb: convertBGRtoRGB(result.recommendations["Analogous 3"]) },
        { name: "Contrast", rgb: convertBGRtoRGB(result.recommendations["Analogous 4"]) },
        { name: "Highlight", rgb: convertBGRtoRGB(result.recommendations["Analogous 5"]) },
      ];

      setColorRecommendations(colors);
      setShowColorGrid(true);
      setIsUploaderOpen(false);
    } catch (error) {
      console.error("Error processing image:", error);
    } finally {
      setIsLoading(false);  // End loading
    }
  }

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = () => {
    if (selectedFiles.length > 0) {
      setIsUploading(true);
      setUploadProgress(0);
      setColorRecommendations([]);

      const uploadInterval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(uploadInterval);
            setIsUploading(false);
            selectedFiles.forEach((file) => {
              processImage(file);
            });
            return 100;
          }
          return prevProgress + 10;
        });
      }, 300);
    }
  };

  const handleRemoveImage = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };

  const toggleUploader = () => {
    setIsUploaderOpen(!isUploaderOpen);
  };

  useEffect(() => {
    console.log("Color Recommendations Updated:", colorRecommendations);
  }, [colorRecommendations]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
          Colorwise AI
        </h1>

        <div className="mb-8">
          <div className="flex justify-center">
            <button
              onClick={toggleUploader}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              {isUploaderOpen ? (
                <>
                  <span className="mr-2">🔼</span>Hide Image Uploader
                </>
              ) : (
                <>
                  <span className="mr-2">🔽</span>Show Image Uploader
                </>
              )}
            </button>
          </div>

          {isUploaderOpen && (
            <div className="w-full max-w-2xl mx-auto mt-4 p-6 bg-white rounded-lg shadow-lg">
              <div className="flex flex-col items-center space-y-6">
                <div className="w-full p-8 text-center border-dashed border-2 rounded-lg bg-gray-50">
                  <input
                    id="file-upload"
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file-upload"
                    className="block text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M14.5 20.5l9.5 9.5m0 0l9.5-9.5m-9.5 9.5V6m14 31h-28a2 2 0 01-2-2V16a2 2 0 012-2h6.5"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-blue-600">Click to upload</span> 
                  </label>
                </div>

                {selectedFiles.length > 0 && (
                  <div className="w-full space-y-2">
                    {selectedFiles.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded-lg shadow-sm">
                        <div className="flex items-center space-x-2">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-14 h-14 object-cover rounded-md"
                          />
                          <span className="text-sm text-gray-700">{file.name}</span>
                        </div>
                        <button
                          className="text-red-600 hover:underline text-sm"
                          onClick={() => handleRemoveImage(index)}
                        >
                          Remove
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {isUploading && (
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                )}

                <div className="flex justify-center w-full">
                  <button
                    onClick={handleUpload}
                    className={`py-2 px-4 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 focus:outline-none ${
                      isUploading || selectedFiles.length === 0
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={isUploading || selectedFiles.length === 0}
                  >
                    {isUploading ? "Uploading..." : "Upload Files"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {uploadedImage && skinColor && (
          <div className="flex justify-center items-center max-w-xl mx-auto mb-8 space-x-6">
            <div className="flex-none">
              <img
                src={uploadedImage}
                alt="Uploaded"
                className="w-28 h-28 object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex-none flex flex-col items-center">
              <div
                className="w-20 h-20 rounded-full border-4 border-white shadow-lg"
                style={{ backgroundColor: `rgb(${skinColor.join(",")})` }}
              ></div>
              <p className="mt-2 text-sm text-gray-700">Detected Skin Color</p>
            </div>
          </div>
        )}

        {isLoading ? (
          // Skeleton grid
          <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 animate-pulse rounded-xl shadow-md overflow-hidden"
                  >
                    <div className="h-32 bg-gray-300"></div>
                    <div className="p-4">
                      <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto mb-2"></div>
                      <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          showColorGrid && (
            <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
              <p className="text-xl text-gray-600 mb-10 text-center max-w-3xl mx-auto">
                Based on the tones in your uploaded image, we've put together six color recommendations that could complement your skin tone beautifully.
              </p>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl p-6 sm:p-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {colorRecommendations.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl shadow-md overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                    >
                      <div
                        className="h-32"
                        style={{ backgroundColor: `rgb(${item.rgb.join(",")})` }}
                      ></div>
                      <div className="p-4">
                        <p className="text-center font-semibold text-gray-800 text-lg">{item.name}</p>
                        <p className="text-center text-gray-600 text-sm">RGB({item.rgb.join(", ")})</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default App;