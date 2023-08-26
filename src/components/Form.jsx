import React, { useState } from "react";
import { uploadFileToIPFS, uploadMetadata } from "../utils/UploadtoIpfs";
import axios from "axios";

const ResponsiveForm = () => {
  const [recipient, setRecipient] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [tokenUri, settokenUri] = useState("");
  const [ImageUri, setImageUri] = useState("");
  const [image, setImage] = useState(null);
  const [uploadMessage, setuploadMessage] = useState(false);

  const JWT = `Bearer ${import.meta.env.VITE_JWT}`;

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !image || !description) {
      return alert("all fields are mandatory");
    }
    setuploadMessage(true);

    try {
      // Upload the image to IPFS
      const imageResponse = await uploadFileToIPFS(image, name);
      if (imageResponse.data && imageResponse.data.IpfsHash) {
        const imageUri = imageResponse.data.IpfsHash;
        console.log("hhhhh", imageUri);
        // Upload the metadata JSON to IPFS
        const metadata = {
          name: name,
          description: description,
          external_url: "https://pinata.cloud", // You can set the IPFS URL of the image as the external_url
          image: imageUri,
        };

        const metadataResponse = await uploadMetadata(metadata);

        if (metadataResponse) {
          settokenUri(metadataResponse);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setuploadMessage(false);
    }
  };

  return (
    <>
      {tokenUri !== "" && (
        <h4 className="</div> top-0 left-0 text-violet-950 text-lg text-center mb-3">
          Token Uri is :{tokenUri}
        </h4>
      )}
      {uploadMessage && (
        <h4 className="</div> top-0 left-0 text-violet-950 text-lg text-center mb-3">
          Uploading to ipfs please wait
        </h4>
      )}
      <div className="flex justify-center items-center relative">
        <form
          className="w-full max-w-lg p-6 bg-white rounded shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="recipient"
              className="block text-gray-700 font-medium mb-2"
            >
              Name Of The NFT
            </label>
            <input
              type="text"
              id="recipient"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="recipient"
              className="block text-gray-700 font-medium mb-2"
            >
              Description
            </label>
            <input
              type="text"
              id="recipient"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              value={description}
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-gray-700 font-medium mb-2"
            >
              Image Upload
            </label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <label
              htmlFor="image"
              className="w-full px-4 py-2 border rounded-lg cursor-pointer bg-blue-500 text-white hover:bg-blue-600 flex items-center justify-center"
            >
              Upload Image
            </label>
          </div>
          {image && (
            <div className="mb-4 flex items-center justify-center">
              <img
                src={image}
                alt="Uploaded"
                className="w-[80%] h-[170px] object-cover"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ResponsiveForm;
