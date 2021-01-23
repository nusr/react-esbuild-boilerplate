import React, { useEffect, useCallback } from "react";
import { BaseIcon, BaseIconName, Github } from "@/components";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import theme from "@/theme";
import { useDispatch, useSelector } from "@/store";
import { handleBuildError } from "@/util";

const IconList = styled.div`
  font-size: 16px;
  display: flex;
  text-align: center;
`;

const IconItem = styled.div`
  margin: 10px;
`;

const ICON_LIST: BaseIconName[] = ["bold", "italic", "underline"];

export const App = React.memo(() => {
  const dispatch = useDispatch();
  const { activeColor } = useSelector(["activeColor"]);
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      handleBuildError();
    }
  }, []);
  const onChangeColor = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      dispatch({ type: "CHANGE_ACTIVE_COLOR", payload: value });
    },
    [dispatch]
  );
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Github />
      <IconList style={{ color: activeColor }}>
        {ICON_LIST.map((key: BaseIconName) => (
          <IconItem key={key}>
            <BaseIcon name={key} />
            <div>{`<BaseIcon name="${key}" />`}</div>
          </IconItem>
        ))}
        <div>
          <label htmlFor="change-color">Change Color:</label>
          <input
            id="change-color"
            type="color"
            value={activeColor}
            onChange={onChangeColor}
          />
        </div>
      </IconList>
    </ThemeProvider>
  );
});

App.displayName = "APP";
