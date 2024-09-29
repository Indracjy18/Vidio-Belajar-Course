import FormRegister from "../components/Fragments/FormRegister";
import FormLayouts from "../components/Layouts/FormLayouts";
import Navbar from "../components/Layouts/NavbarLayouts";

const RegisterPage = () => {
  return (
    <>
      <Navbar page="auth" />
      <FormLayouts
        textH="Pendaftaran Akun "
        textP="Yuk,daftarkan akunmu sekarang juga!"
      >
        <FormRegister />
      </FormLayouts>
    </>
  );
};

export default RegisterPage;
