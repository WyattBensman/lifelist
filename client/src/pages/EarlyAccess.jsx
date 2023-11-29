import { useState } from "react";
import EarlyAccessForm from "../components/EarlyAccessForm";
import EarlyAccessHeader from "../components/EarlyAccessHeader";
import Navbar from "../components/Navbar";
import { useMutation } from "@apollo/client";
import { RESEND_VERIFICATION_EMAIL } from "../utils/mutations";

export default function EarlyAccess() {
  const [showForm, setShowForm] = useState(true);
  const [emailForResend, setEmailForResend] = useState("");

  // RESEND VERIFICATION
  const [resendVerificationMutation] = useMutation(RESEND_VERIFICATION_EMAIL);

  const handleSetForm = () => {
    setShowForm(false);
  };

  const handleResendVerification = async () => {
    try {
      await resendVerificationMutation({
        variables: { email: emailForResend },
      });

      console.log("Resend verification email successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Navbar />
        <EarlyAccessHeader />
        <div className="flex justify-center mt-10">
          <div className="w-11/12 md:w-2/5">
            {showForm ? (
              <>
                <h2 className="text-4xl font-semibold">
                  Be one of the first users!
                </h2>
                <p className="mt-4">
                  Gain <span className="font-medium italic">early access</span>{" "}
                  prior to the official launch &{" "}
                  <span className="font-medium italic inline">reserve</span>{" "}
                  your username
                </p>
                <EarlyAccessForm
                  handleSetForm={handleSetForm}
                  setEmailForResend={setEmailForResend}
                />
              </>
            ) : (
              <div className="text-center">
                <h6 className="font-medium mt-4">One last step!</h6>
                <p>An email has been sent to confirm your account!</p>
                <button
                  type="button"
                  className="border-2 rounded-3xl font-medium border-[#34CC98] px-4 py-2 bg-[#34CC98] text-white hover:text-[#34CC98] hover:bg-white ease-in-out duration-200 mt-2"
                  onClick={handleResendVerification}
                >
                  RESEND VERIFICATION
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
