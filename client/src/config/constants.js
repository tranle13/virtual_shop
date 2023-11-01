import { ai, fileIcon, logoShirt, stylishShirt, swatch } from "../assets";

export const EditorTabs = [
  {
    name: "colorpicker",
    icon: swatch,
    label: "Color swatches",
  },
  {
    name: "filepicker",
    icon: fileIcon,
    label: "Image upload",
  },
  {
    name: "aipicker",
    icon: ai,
    label: "AI image generator",
  },
];

export const FilterTabs = [
  {
    name: "logoShirt",
    icon: logoShirt,
    label: "Apply as logo",
  },
  {
    name: "stylishShirt",
    icon: stylishShirt,
    label: "Apply as full shirt design",
  },
];

export const DecalTypes = {
  logo: {
    stateProperty: "logoDecal",
    filterTab: "logoShirt",
  },
  full: {
    stateProperty: "fullDecal",
    filterTab: "stylishShirt",
  },
};
