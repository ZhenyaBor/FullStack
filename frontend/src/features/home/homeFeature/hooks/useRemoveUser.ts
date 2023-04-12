import { All_USERS, REMOVE_USER } from "Apollo/users";
import { useMutation } from "@apollo/client";
import { MutationFunction } from "@apollo/client";
import { useState } from "react";

type Return = {
  removeUser: MutationFunction;
  setRemoveSuccess: (bool: boolean) => void;
  showRemove: boolean;
};

export const useRemoveUser = (): Return => {
  const [showRemove, setRemoveSuccess] = useState(false);

  const [removeUser] = useMutation(REMOVE_USER, {
    refetchQueries: [{ query: All_USERS }],

    onCompleted: () => {
      setRemoveSuccess(true);
      setTimeout(() => {
        setRemoveSuccess(false);
      }, 3000);
    },
  });

  return { removeUser, setRemoveSuccess, showRemove };
};
