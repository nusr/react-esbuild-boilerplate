import React from "react";
export declare type BaseIconName = "bold" | "italic" | "underline";
declare type BaseIconProps = {
    className?: string;
    name: BaseIconName;
};
export declare const BaseIcon: React.MemoExoticComponent<(props: BaseIconProps) => JSX.Element>;
export {};
