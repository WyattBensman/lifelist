import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { VERIFY_EMAIL } from "../utils/mutations";
import { useEffect } from "react";
import { client } from "../App";

export default function VerifyEmail() {
  const { token } = useParams();

  const [verifyEmailMutation, { loading, error }] = useMutation(VERIFY_EMAIL, {
    variables: { token },
  });

  useEffect(() => {
    const verifyEmailAndRefetch = async () => {
      try {
        const response = await verifyEmailMutation();
        console.log(response.data);

        // Manually update the cache to reflect the email verification
        client.resetStore(); // Reset Apollo Client cache
      } catch (error) {
        console.error(error);
      }
    };

    verifyEmailAndRefetch();
  }, [verifyEmailMutation]);

  if (loading) {
    return <div>Verifying email...</div>;
  }

  if (error) {
    return <div>Error verifying email. Please try again later.</div>;
  }

  return <div>Email Verified!</div>;
}
