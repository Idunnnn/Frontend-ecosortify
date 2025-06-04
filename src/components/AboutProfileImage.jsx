import clsx from "clsx";

export default function AboutProfileImage({ name, role, text = "", className, src, ...props }) {
  return (
    <section {...props} className="lg:max-w-[300px] ">
      <div className="lg:h-[300px] lg:w-[300px] h-[200px]  lg:rounded-2xl rounded-lg relative">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg "
          className="bottom-0 w-[250px] lg:w-[350px] absolute left-1/2 transform -translate-x-1/2"
        >
          <path
            fill="#E31515"
            d="M38.2,-50C51,-43.3,63.9,-34.1,69.2,-21.6C74.5,-9.1,72.2,6.8,68,22.9C63.9,38.9,57.8,55,46.1,63.3C34.5,71.6,17.2,72,2.1,69.1C-13.1,66.2,-26.1,60.1,-40,52.5C-53.8,44.9,-68.5,36,-73,23.4C-77.6,10.8,-72,-5.4,-64.7,-18.8C-57.3,-32.2,-48,-42.8,-36.9,-50.1C-25.9,-57.4,-12.9,-61.4,-0.1,-61.2C12.7,-61,25.4,-56.8,38.2,-50Z"
            transform="translate(100 100)"
          />
        </svg>
        <img src={src} className="bottom-0 w-[180px] lg:w-[250px] absolute left-1/2 transform -translate-x-1/2" alt="" />
      </div>
      <h3 className="subheading-6 mt-4 lg:text-center">Farid Al Mudzakir</h3>
      <p className="body-8 lg:text-center ">Backend Developer</p>
      <p className="body-7 mt-2 text-[#383838] lg:text-center">
        Pemuda antusias yang penasaran dan energik, menghargai kerja keras dan usaha. Bertanggung jawab menyusun UI/UX designer
        dan Backend
      </p>
    </section>
  );
}
