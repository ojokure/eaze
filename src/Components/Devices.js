import React from "react";
import DeviceCard from "./DeviceCard";
import Sidebar from "./Sidebar";
import device_images from "./imageArray";
import { StyledMarketplace, StyledDevices } from "../Styles/StyledMarketPlace";

function Devices(props) {
  const { devices, searchPriceCallback } = props;

  return (
    <StyledMarketplace>
      <Sidebar searchPrice={searchPriceCallback} />
      <StyledDevices>
        {devices &&
          devices.map((device) => (
            <DeviceCard
              key={device._id}
              name={device.name}
              price={device.price}
              condition={device.condition}
              storage={device.storage}
              images={device_images}
            />
          ))}
      </StyledDevices>
    </StyledMarketplace>
  );
}

export default Devices;
