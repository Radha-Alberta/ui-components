import React, { FC } from "react";
import { GoAIcon } from "@abgov/react-components";
import "./DoDont.css";

type DoDont = "do" | "dont";
interface Props {
  type: DoDont;
  content: string;
  description?: string;
}

export const DoDont: FC<Props> = ({ type, content, description }) => {
  return (
    <>
      <div className="container">
        {content}
      </div>
      <div className="content" data-positive={type}>
        {type === "do" ? <GoAIcon type="checkmark-circle" /> : <GoAIcon type="close-circle" />}
        <div className="content-label">{type}</div>
      </div>
      <div> {description} </div>
    </>
  );
};
