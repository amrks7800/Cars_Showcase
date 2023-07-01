"use client";
import Image from "next/image";
import { SearchManufacturer } from "./";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchButton = ({ styles }: { styles: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${styles}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifier"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const updateSearchParams = (
    model: string,
    manufacturer: string
  ) => {
    // Create a new URLSearchParams object using the current URL search parameters
    const searchParams = new URLSearchParams(
      window.location.search
    );

    // Update or delete the 'model' search parameter based on the 'model' value
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    // Update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // Generate the new pathname with the updated search parameters
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (manufacturer === "" && model === "")
      return alert("please fill in inputs");

    updateSearchParams(
      model.toLowerCase(),
      manufacturer.toLowerCase()
    );
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="model-icon"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={e => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton styles="sm:hidden" />
      </div>
      <SearchButton styles="max-sm:hidden" />
    </form>
  );
};
export default SearchBar;
