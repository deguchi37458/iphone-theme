import React from "react"

import { ReactComponent as NetworkIcon } from '../assets/img/icon/network_icon.svg'
import { ReactComponent as WifiIcon } from '../assets/img/icon/wifi_icon.svg'
import { ReactComponent as BatteryIcon } from '../assets/img/icon/battery_icon.svg'

export const Header = () => {
  return (
    <>
      <div className="header">
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
