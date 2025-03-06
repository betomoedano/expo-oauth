import { useState } from "react";
import { Session, User } from "./ExpoOauth.types";

export const useOauth = () => {
  const [oauth, setOauth] = useState<Session | null>({
    user: {
      id: "1",
      name: "John Doe",
      email: "john.doe@example.com",
      image: "https://example.com/avatar.png",
    },
    expires: "2021-01-01T00:00:00.000Z",
  });

  return {
    oauth,
    setOauth,
  };
};
