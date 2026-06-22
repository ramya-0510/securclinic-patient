import logo from "../../../assets/logo.png";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="SecurClinic logo"
        className="h-8 w-8 rounded-lg object-contain"
      />
      <span className="font-brand text-[18px] tracking-normal text-[#198CFF] uppercase">SECURCLINIC</span>
      
    </div>
  );
}

export default Logo;
