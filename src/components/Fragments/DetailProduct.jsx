import Button from "../Elements/Button/Index";
import icons from "../../../public/assets/img/avatar/Avatar-08.png";
import clock from "../../../public/assets/img/icons/Clock Icon.png";
import playButton from "../../../public/assets/img/icons/Play Button Icon.png";
import arrowUp from "../../../public/assets/img/icons/Arrow Up Icon.png";
import arrowDown from "../../../public/assets/img/icons/Arrow Down Icon.png";

const DetailProduct = () => {
  return (
    <div className="flex flex-col gap-9 w-4/5">
      <Description />
      <Tutor />
      <Materi />
      <Previos />
    </div>
  );
};

const Description = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-xl text-black font-semibold font-poppins">
        Deskripsi
      </h5>
      <p>
        Foundations of User Experience (UX) Design adalah yang pertama dari
        rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang
        dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain
        pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
        orang dengan produk seperti situs web, aplikasi seluler, dan objek
        fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan,
        menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat
        pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa
        sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe,
        prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.
      </p>
    </article>
  );
};

const Tutor = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-xl text-black font-semibold font-poppins">
        Belajar bersama Tutor Profesional
      </h5>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <img src={icons} alt="" />
            <div>
              <span className="text-black font-dm-sans font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-sm text-black font-dm-sans">
                Senior Talent Acquisition di{" "}
                <span className="text-black font-dm-sans font-semibold">
                  WingsGroup
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-dm-sans">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <img src={icons} alt="" />
            <div>
              <span className="text-black font-dm-sans font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-sm text-black font-dm-sans">
                Senior Talent Acquisition di{" "}
                <span className="text-black font-dm-sans font-semibold">
                  WingsGroup
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-dm-sans">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Materi = () => {
  return (
    <div className="bg-white flex flex-col gap-6 p-5 border rounded-[10px]">
      <h5 className="text-xl text-black font-semibold font-poppins">
        Kamu akan Mempelajari
      </h5>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h6 className="text-lg text-primary font-poppins font-semibold">
            Introducing to Course 1: Foundations of User Experience Design
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src={arrowUp}
          />
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-base text-black font-dm-sans font-medium">
            The basic of user experience design
          </p>
          <div className="flex gap-4 h-6">
            <div className="flex gap-2">
              <img src={playButton} alt="" />
              <span className="text-base text-black font-dm-sans">Video</span>
            </div>
            <div className="flex gap-2">
              <img src={clock} alt="" />
              <span className="text-base text-black font-dm-sans">
                12 Menit
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-base text-black font-dm-sans font-medium">
            Jobs in the field of user experience
          </p>
          <div className="flex gap-4 h-6">
            <div className="flex gap-2">
              <img src={playButton} alt="" />
              <span className="text-base text-black font-dm-sans">Video</span>
            </div>
            <div className="flex gap-2">
              <img src={clock} alt="" />
              <span className="text-base text-black font-dm-sans">
                12 Menit
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-base text-black font-dm-sans font-medium">
            The product development life cycle
          </p>
          <div className="flex gap-4 h-6">
            <div className="flex gap-2">
              <img src={playButton} alt="" />
              <span className="text-base text-black font-dm-sans">Video</span>
            </div>
            <div className="flex gap-2">
              <img src={clock} alt="" />
              <span className="text-base text-black font-dm-sans">
                12 Menit
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h6 className="text-lg text-primary font-poppins font-semibold">
            Universal design, inclusive design, and equity-focused design
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src={arrowDown}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h6 className="text-lg text-primary font-poppins font-semibold">
            Introduction to design sprints
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src={arrowDown}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between">
          <h6 className="text-lg text-primary font-poppins font-semibold">
            Introduction to UX research
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src={arrowDown}
          />
        </div>
      </div>
    </div>
  );
};

const Previos = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-xl text-black font-semibold font-poppins">
        Rating dan Review
      </h5>
      <div className="flex gap-4">
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <img src={icons} alt="" />
            <div>
              <span className="text-black font-dm-sans font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-sm text-black font-dm-sans">Almuni Batch 2</p>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-dm-sans">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <img src={icons} alt="" />
            <div>
              <span className="text-black font-dm-sans font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-sm text-black font-dm-sans">Alumni Batch 2</p>
            </div>
          </div>
          <div>
            <p className="text-base text-black font-dm-sans">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DetailProduct;
