import React from "react"

import { ReactComponent as NetworkIcon } from '../assets/img/icon/network_icon.svg'
import { ReactComponent as WifiIcon } from '../assets/img/icon/wifi_icon.svg'
import { ReactComponent as BatteryIcon } from '../assets/img/icon/battery_icon.svg'

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const header = css`
  width: 100%;
  height: 32px;
  padding: 0 10px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

export const Header = () => {
  return (
    <>
      <div css={header}>
        <div className="header__left">
          9:30
        </div>
        <div className="header__right">
          <NetworkIcon fill="#fff" />
          <WifiIcon fill="#fff" />
          <BatteryIcon fill="#fff" />
        </div>
      </div>
    </>
  );
}; 
