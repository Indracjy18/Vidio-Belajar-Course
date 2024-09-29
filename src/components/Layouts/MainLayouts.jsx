const MainLayouts = ({ children, gap, items }) => {
  return (
    <main
      className={`w-screen min-h-screen bg-yellow-50 flex flex-col ${gap} justify-center ${items} py-24 px-5 md:py-[160px] md:px-[120px] scroll-smooth`}
    >
      {children}
    </main>
  );
};

export default MainLayouts;
