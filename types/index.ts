import { MouseEventHandler } from "react";

export interface ButtonProps {
  title: string;
  containerStyle?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset" | undefined;
  rightIcon?: string;
}

export interface SearchManufacturer {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface FilterProps {
  manufacturer?: string;
  year?: string;
  model?: string;
  limit?: string;
  fuel?: string;
}

export interface CarCardProps {
  car: carProps;
}

export interface carProps {
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

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMorePros {
  pageNumber: number;
  isNext: boolean;
}
