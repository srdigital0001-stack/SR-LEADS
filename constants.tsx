
import React from 'react';

export const PHONE_E164 = "+919211841593";
export const PHONE_DISPLAY = "9211841593";

export const WHATSAPP_DEFAULT_MSG = 
`Hi SR Digital! I'm a realtor in Delhi NCR.
I want high-quality leads for my properties.
My area: ____ | Budget segment: ____.
Please share your free lead audit + plan.`;

export const AREAS = [
  "Delhi",
  "Gurgaon",
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Faridabad",
  "Other (NCR)"
];

export const BUDGET_RANGES = [
  "₹15k – ₹30k",
  "₹30k – ₹60k",
  "₹60k – ₹1.2L",
  "₹1.2L+"
];

export const buildWhatsAppLink = (message: string) => {
  const text = encodeURIComponent(message);
  const number = PHONE_E164.replace("+", "");
  return `https://wa.me/${number}?text=${text}`;
};
