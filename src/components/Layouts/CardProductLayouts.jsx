import React from "react";
import Card from "../Fragments/ProductCard";

const CardProductsLayouts = () => {
  const cardsData = [
    {
      imgSrc: "../../../public/assets/img/images/img-01.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-01.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-02.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-02.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-03.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-03.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-04.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-04.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-05.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-05.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-06.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-06.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-07.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-07.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-08.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-08.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
    {
      imgSrc: "../../../public/assets/img/images/img-09.png",
      title: "Big 4 Auditor Financial Analyst",
      description:
        "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...",
      instructorImg: "../../../public/assets/img/avatar/Avatar-09.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
  ];

  return (
    <div className="flex flex-wrap gap-6">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          imgSrc={card.imgSrc}
          title={card.title}
          description={card.description}
          instructorImg={card.instructorImg}
          instructorName={card.instructorName}
          instructorRole={card.instructorRole}
          price={card.price}
          rating={card.rating}
        />
      ))}
    </div>
  );
};

export default CardProductsLayouts;
