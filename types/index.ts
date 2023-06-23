import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyle?: string;
  rightIcon?: string;
  isDisable?: boolean;
}

export interface CustomFilterProps {
  title: string;
  options: OptionsProps[];
}

export interface OptionsProps {
  title: string;
  value: string;
}
export interface FiltersProps {
  manufacturer: string;
  model: string;
  fuel: string;
  year: number;
  limit: number;
}
export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

export interface CarImageBuilder {
  make: string;
  modelFamily: string;
  modelRange: string;
  modelVariant: string;
  angles: string;
  modelYear: string;
  countryCode: string;
  paintId: string;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
