import { User } from "../types";
import { getUser } from "../api/getUser";
import { css } from "@emotion/react";

const UserIconContainer = css({
  display: "flex",
});

export const UserIcon = () => {
  const user: User = getUser();

  return (
    <div className="UserIcon">
      <div css={UserIconContainer}>
        <div>icon</div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};
