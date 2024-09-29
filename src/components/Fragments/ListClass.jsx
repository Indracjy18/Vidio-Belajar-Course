import React from "react";
import List from "./List";

const ListClass = () => {
  const list = [
    {
      id: 1,
      nama: "Semua Kelas",
    },
    {
      id: 2,
      nama: "Pemasaran",
    },
    {
      id: 3,
      nama: "Desain",
    },
    {
      id: 4,
      nama: "Pengembangan Diri",
    },
    {
      id: 5,
      nama: "Bisnis",
    },
  ];
  return (
    <>
      <ul className="w-full h-[50px] flex justify-start items-start scrollbar-hide  scroll whitespace-nowrap scroll-smooth">
        {list.map((item) => (
          <List
            key={item.id}
            classname=" h-[46px] flex items-start gap-1.5 py-3 pl-0 pr-9 text-lg hover:text-red-500 cursor-pointer "
          >
            {item.nama}
          </List>
        ))}
              
      </ul>
    </>
  );
};

export default ListClass;
