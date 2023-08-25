import React, { useState } from "react";

const ResponsiveForm = () => {
  const [recipient, setRecipient] = useState("");
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [image, setImage] = useState(null);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image || !description) {
      return alert("all fields are mandatory");
    }
    // Add your submission logic here
  };

  return (
    <div className="flex justify-center items-center ">
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
  );
};

export default ResponsiveForm;
