import Button from "../Elements/Button/Index";
import BannerProduct from "../Fragments/BannerProduct";

const BannerLayouts = ({ type, background }) => {
  return (
    <BannerProduct background={background}>
      {type === "uiux" ? (
        <BannerCourseUiUx />
      ) : type === "course" ? (
        <BannerCourseMain />
      ) : (
        <BannerCourseNewsletter />
      )}
    </BannerProduct>
  );
};

// Ganti nama komponen dari BannerCourse menjadi BannerCourseMain
const BannerCourseMain = () => {
  return (
    <div className="absolute md:top-22 top-26 flex flex-col gap-6 items-center z-10">
      <div className="md:w-[920px] w-[280px] flex flex-col gap-3">
        <h1 className="md:text-5xl text-2xl font-poppins font-bold text-center text-white leading-[26.4px] md:leading-[52.8px]">
          Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video
          Interaktif!
        </h1>
        <p className="text-lg font-dm-sans font-medium text-center text-white leading-[19.6px]">
          Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
          pembelajaran berkualitas tinggi. Tidak hanya itu, Anda juga dapat
          berpartisipasi dalam latihan interaktif yang akan meningkatkan
          pemahaman Anda.
        </p>
      </div>
      <Button
        className="md:w-[369px] w-[280px] md:h-[42px] h-[40px] bg-primary-500 text-white md:text-lg text-sm
       font-bold rounded-lg"
      >
        Temukan Video Course untuk Dipelajari
      </Button>
    </div>
  );
};

const BannerCourseNewsletter = () => {
  return (
    <div className="absolute top-[154rem] md:top-[142rem] 2xl:top-[158rem] w-[280px] md:w-[525px] flex flex-col gap-10 z-10">
      <div className="w-[280px] md:w-[525px] flex flex-col gap-1 p-2">
        <span className="text-lg text-center font-dm-sans font-medium text-white">
          NEWS LETTER
        </span>
        <h3 className="md:text-h3 text-2xl font-poppins font-bold text-center text-white leading-[26.4px] md:leading-[35.2px]">
          Mau Belajar Lebih Banyak?
        </h3>
        <p
          className="md:text-lg text-sm
         font-dm-sans font-medium text-center text-white leading-[19.6px] md:leading-[22.4px]"
        >
          Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran
          spesial dari program-program terbaik hariesok.id
        </p>
      </div>
      <div className="w-full h-[58px] flex gap-5 py-2 pr-2 md:pl-8 pl-3 rounded-lg bg-white">
        <input
          type="email"
          name="email"
          id="email"
          className="w-full h-full border-none rounded-lg placeholder-dark-secondary md:text-lg text-sm
           font-dm-sans justify-start"
          placeholder="Masukan Emailmu"
        />
        <Button
          className="w-[123px] md:w-[132px] h-10 md:h-42px py-2.5 px-[26px] md:text-lg text-sm
         font-bold text-white bg-secondary-500 rounded-lg"
        >
          Subscribe
        </Button>
      </div>
    </div>
  );
};

const BannerCourseUiUx = () => {
  return (
    <div className="absolute top-[154rem] md:top-[20rem] 2xl:top-[20rem] md:left-[15rem] 2xl:left-[35rem] w-[280px] md:w-[525px] flex flex-col justify-center z-10">
      <div className="w-[280px] md:w-[900px] flex flex-col gap-3 p-2">
        <h2 className="text-4xl text-white font-poppins font-semibold leading-[44px]">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h2>
        <p className="text-lg text-white font-dm-sans font-medium">
          Belajar bersama tutor profesional di Video Course. <br />
          Kapanpun, di manapun.
        </p>
      </div>
      <div className="flex md:h-6 mt-4">
        <img className="" src="/icons/Rating.png" alt="" />
        <span className="border-b-2 font-medium text-white">3.5 (86)</span>
      </div>
    </div>
  );
};

export default BannerLayouts;
