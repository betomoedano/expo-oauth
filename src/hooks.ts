import { useState } from "react";
import { Oauth } from "./ExpoOauth.types";

export const useOauth = () => {
  const [oauth, setOauth] = useState<Oauth | null>({
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://example.com/avatar.png",
  });

  return {
    oauth,
    setOauth,
  };
};
