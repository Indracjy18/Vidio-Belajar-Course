import React, { useState, useRef, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import Label from "./Label";

const countries = [
  { code: "US", dialCode: "+1", label: "United States" },
  { code: "ID", dialCode: "+62", label: "Indonesia" },
  { code: "GB", dialCode: "+44", label: "United Kingdom" },
  { code: "AU", dialCode: "+61", label: "Australia" },
  { code: "IN", dialCode: "+91", label: "India" },
];

const InputNumber = (props) => {
  const { label, htmlfor } = props;
  const { type, placeholder } = props;
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Label htmlfor={htmlfor}>{label}</Label>
      <div className="flex items-center gap-4">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={toggleDropdown}
            className="flex items-center border border-gray-300 rounded p-2"
          >
            <ReactCountryFlag countryCode={selectedCountry.code} svg />
            {selectedCountry.dialCode}
          </button>
          {isDropdownOpen && (
            <ul className="absolute mt-1 border bg-white rounded shadow-lg z-10 w-full">
              {countries.map((country) => (
                <li
                  key={country.code}
                  className="p-2 cursor-pointer hover:bg-gray-100 flex items-center"
                  onClick={() => handleSelect(country)}
                >
                  <ReactCountryFlag countryCode={country.code} svg />
                  {country.dialCode} {country.label}
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className="flex-1 py-2 border rounded-md w-full"
        />
      </div>
    </>
  );
};

export default InputNumber;
