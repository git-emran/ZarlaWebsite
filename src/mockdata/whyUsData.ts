import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import { GiCarWheel } from "react-icons/gi";
import { GiCarKey } from "react-icons/gi";
import { FaAlipay } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { GiCarDoor } from "react-icons/gi";
import { RiCaravanFill } from "react-icons/ri";

export const features = [
  {
    title: "Complete Detailing Package",
    description:
      "Our comprehensive package revitalizes your car inside and out, leaving it looking showroom-ready and feeling fresh. ",
    icon: React.createElement(FaAlipay),
  },
  {
    title: "Interior Deep Clean",
    description:
      "Our skilled team meticulously cleans every inch of your car’s interior, ensuring a spotless and inviting environment.",
    icon: React.createElement(FaCarSide),
  },
  {
    title: "Paint Protection",
    description:
      "Protect your vehicle’s paint from scratches and environmental damage, extending its beauty for years to come.",
    icon: React.createElement(FaAddressCard),
  },
  {
    title: "Eco friendly wash",
    description:
      "Do you want to preserve the environment while keeping your car clean? Our eco-friendly wash uses biodegradable products to protect nature.",
    icon: React.createElement(GiCarKey),
  },
  {
    title: "Wheel and tire care",
    description:
      "Join countless satisfied customers who rave about our meticulous wheel and tire care service, transforming your tires to look brand new.",
    icon: React.createElement(GiCarKey),
  },
  {
    title: "Mobile Detailing service",
    description:
      "Trust us with our convenient mobile detailing service that brings professional care right to your doorstep, tailored to your schedule.",
    icon: React.createElement(GiCarDoor),
  },
];
