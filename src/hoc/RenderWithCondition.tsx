import React, { FC } from "react";

interface IProps {
  condition: boolean;
  children: JSX.Element;
}

export const RenderWithCondition: FC<IProps> = ({ condition, children }) => {
    if (!condition) return null;

    return children;
};