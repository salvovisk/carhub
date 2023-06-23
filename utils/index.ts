import { CarImageBuilder, CarProps, FiltersProps } from "@/types";
import { log } from "console";

export async function fetchCars(filters: FiltersProps) {
  const { manufacturer, model, year, fuel, limit } = filters;

  const headers = {
    "X-RapidAPI-Key": "4339245d3dmsh0261f20c2efb0fdp1ebd33jsn1714bd7bd9ea",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}&limit=${limit}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();
  console.log(result);
  return result;
}

const carImageBaseUrl = "https://cdn.imagin.studio";

export const heroCarImageUrl = (car: CarImageBuilder) => {
  const url = new URL(`${carImageBaseUrl}/getImage`);
  const {
    make,
    modelFamily,
    modelRange,
    modelVariant,
    angles,
    modelYear,
    countryCode,
    paintId,
  } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", modelFamily.split(" ")[0]);
  url.searchParams.append("modelRange", modelRange.split(" ")[0]);
  url.searchParams.append("modelVariant,", modelVariant.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("countryCode", `${countryCode}`);
  url.searchParams.append("width", "1200");
  url.searchParams.append("modelYear", `${modelYear}`);
  url.searchParams.append("angle", `${angles}`);
  url.searchParams.append("paintId", `${paintId}`);

  return `${url}`;
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL(`${carImageBaseUrl}/getImage`);

  const { make, year, model } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  return `${url}`;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
