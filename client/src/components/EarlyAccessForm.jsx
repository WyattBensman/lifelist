import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../utils/mutations";

export default function EarlyAccessForm({ handleSetForm, setEmailForResend }) {
  const [viewRequirements, setViewRequirements] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
  });

  // CREATE USER
  const [createUserMutation] = useMutation(CREATE_USER);

  const handleViewRequirements = () => {
    setViewRequirements(!viewRequirements);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await createUserMutation({
        variables: { ...formData },
      });

      setEmailForResend(formData.email);
      handleSetForm();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <form className="w-full mt-4 pb-8" onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-lg">
          Email
        </label>
        <input
          name="email"
          type="email"
          className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none mt-1"
          placeholder=""
          value={formData.email}
          onChange={handleInputChange}
        />

        <label htmlFor="username" className="block text-lg mt-4">
          Username
        </label>
        <p className="text-xs" onClick={handleViewRequirements}>
          View Requirements
        </p>
        {viewRequirements ? (
          <p className="text-xs">
            Must contain only letters, numbers, dashes (-) and between 7-30
            characters
          </p>
        ) : (
          ""
        )}
        <input
          name="username"
          type="text"
          className="block w-full px-4 py-2 border rounded-md shadow-sm text-secondary focus:outline-none mt-1"
          placeholder=""
          value={formData.username}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="border-2 rounded-3xl font-medium border-[#34CC98] px-4 py-2 bg-[#34CC98] text-white hover:text-[#34CC98] hover:bg-white ease-in-out duration-200 mt-4"
        >
          SIGN UP
        </button>
      </form>
    </>
  );
}
