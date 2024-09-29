import Button from "../Elements/Button/Index";
import vidio from "../../../public/assets/img/icons/video.png";
import books from "../../../public/assets/img/icons/book-2.png";
import fileCheck from "../../../public/assets/img/icons/File_Check.png";
import certificate from "../../../public/assets/img/icons/file-certificate.png";
import fileEdit from "../../../public/assets/img/icons/File_Edit.png";
import globe from "../../../public/assets/img/icons/world.png";
import { useNavigate } from "react-router-dom";

const AsideCard = () => {
  const navigate = useNavigate();

  const handleKeranjang = (event) => {
    event.preventDefault();
    navigate("/keranjang");
  };

  return (
    <div className="w-2/6 h-full flex flex-col p-6 gap-6 bg-white border rounded-[10px] z-10">
      <div className="flex flex-col gap-4">
        <h6 className="text-h6 text-black font-poppins font-semibold">
          Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product
          Manager.
        </h6>
        <div className="flex justify-between h-[25px]">
          <div className="flex gap-2">
            <h6 className="text-base text-primary-500 font-poppins font-semibold">
              Rp 250K
            </h6>
            <span className="line-through text-gray-500">Rp 500K</span>
          </div>
          <div className="bg-secondary-500 py-1 px-2.5 gap-1 border rounded-[10px] flex items-center">
            <p className="text-white">Diskon 50%</p>
          </div>
        </div>
        <p className="text-sm text-blue-400 font-dm-sans font-medium">
          Penawaran spesial tersisa 2 hari lagi!
        </p>
      </div>

      <Button
        onClick={handleKeranjang}
        className="w-full rounded-[10px] py-2 bg-primary-500 font-bold"
      >
        Beli Sekarang
      </Button>

      <div className="flex flex-col gap-3">
        <p className="text-black font-poppins font-semibold">
          Kelas ini Sudah Termasuk
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="flex gap-2 items-center">
            <img src={fileCheck} alt="Ujian Akhir" />
            <p className="text-sm text-black font-dm-sans">Ujian Akhir</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={vidio} alt="45 Video" />
            <p className="text-sm text-black font-dm-sans">45 Video</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={books} alt="7 Dokumen" />
            <p className="text-sm text-black font-dm-sans">7 Dokumen</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={certificate} alt="Sertifikat" />
            <p className="text-sm text-black font-dm-sans">Sertifikat</p>
          </div>
          <div className="flex gap-2 items-center">
            <img src={fileEdit} alt="Pretest" />
            <p className="text-sm text-black font-dm-sans">Pretest</p>
          </div>
        </div>
      </div>

      <div>
        <p className="text-black font-poppins font-semibold">
          Bahasa Pengantar
        </p>
        <div className="flex gap-2 items-center">
          <img src={globe} alt="Bahasa Indonesia" />
          <p className="text-sm text-black font-dm-sans">Bahasa Indonesia</p>
        </div>
      </div>
    </div>
  );
};

export default AsideCard;
