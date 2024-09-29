import AsideCard from "../Fragments/AsideCard";
import DetailProduct from "../Fragments/DetailProduct";
import Card from "../Fragments/ProductCard";

const DetailLayouts = () => {
  return (
    <>
      <div className="w-full flex gap-9">
        <DetailProduct />
        <AsideCard />
      </div>
      <DetailCardSection />
    </>
  );
};

const DetailCardSection = () => {
  const dataProduct = [
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
      instructorImg: "../../../public/assets/img/avatar/Avatar-01.png",
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
      instructorImg: "../../../public/assets/img/avatar/Avatar-01.png",
      instructorName: "Jenna Ortega",
      instructorRole: "Senior Accountant",
      price: "Rp.300K",
      rating: "../../../public/assets/img/icons/Rating.png",
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8">
      <div className="flex flex-col">
        <h3 className="text-h3 text-dark-primary font-heading font-semibold">
          Video Pembelajaran Terkait Lainnya
        </h3>
        <p className="text-lg text-dark-secondary font-body">
          Ekspansi Pengetahuan Anda dengan Rekomendasi Spesial Kami!
        </p>
      </div>
      <div className="flex gap-6 w-full">
        {dataProduct.map((card, index) => (
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
    </div>
  );
};

export default DetailLayouts;
