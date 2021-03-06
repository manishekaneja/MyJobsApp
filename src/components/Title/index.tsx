import { FC } from "react";

const Title: FC<TitleProps> = ({ title, type = "dark" }) => (
  <h4
    className={`capitalize font-semibold text-2xl my-3 ${
      type === "dark" ? "secondary" : ""
    } ${type === "light" ? "text-white" : ""}`}
  >
    {title}
  </h4>
);

export { Title };
