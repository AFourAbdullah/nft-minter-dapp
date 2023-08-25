import React, { useState } from "react";

const MintForm = () => {
  const [recipient, setRecipient] = useState("");
  const [image, setImage] = useState(null);

  const handleRecipientChange = (e) => {
    setRecipient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="flex justify-center items-center  ">
      <form
        className="w-full max-w-lg p-6 bg-white rounded  shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="recipient"
            className="block text-gray-700 font-medium mb-2"
          >
            Ipfs Url
          </label>
          <input
            type="text"
            id="recipient"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={recipient}
            onChange={handleRecipientChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="recipient"
            className="block text-gray-700 font-medium mb-2"
          >
            Recipient
          </label>
          <input
            type="text"
            id="recipient"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            value={recipient}
            onChange={handleRecipientChange}
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Mint
          </button>
        </div>
      </form>
    </div>
  );
};

export default MintForm;
