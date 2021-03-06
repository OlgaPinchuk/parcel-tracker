// NPM Packages
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

export const LocationPin = () => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
  </div>
);
