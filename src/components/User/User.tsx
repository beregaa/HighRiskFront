"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Authorisation from "../Authorisation/Authorisation";
import ProfileIcon from "../ProfileIcon/Profielcon";

const DecodeUserToken: React.FC = () => {
  const [decodedToken, setDecodedToken] = useState<any>(null);
  const [ifRoute, setIfROute] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("user");

    if (token) {
      try {
        const decoded = jwtDecode(token);
        setDecodedToken(decoded);
        setIfROute(true);
      } catch (error) {
        setIfROute(false);
        console.error("Error decoding token", error);
      }
    }
  }, [ifRoute]);

  if (!decodedToken) {
    return <Authorisation />;
  }

  return <ProfileIcon user={decodedToken} />;
};

export default DecodeUserToken;
