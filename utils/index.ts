import { CarProps, FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // $50 per day
  const mileageFactor = 0.1; // $0.1 per mile
  const ageFactor = 0.05; // $0.05 per year

  //calculate additional rate
  const mileage = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  //calculate total rental rate per day

  const rentalRatePerDay = basePricePerDay + mileage + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "bdhr-shohel");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return url.toString();
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  // Generate the new pathname with the updated search parameters
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
