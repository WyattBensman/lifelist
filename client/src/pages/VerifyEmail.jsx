import { useParams } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { VERIFY_EMAIL } from "../utils/mutations";
import { useEffect } from "react";

export default function VerifyEmail() {
  const { token } = useParams();

  const [verifyEmailMutation, { loading, error }] = useMutation(VERIFY_EMAIL, {
    variables: { token },
  });

  useEffect(() => {
    verifyEmailMutation()
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <div>Verifying email...</div>;
  }

  if (error) {
    return <div>Error verifying email. Please try again later.</div>;
  }

  return <div>Email Verified!</div>;
}
