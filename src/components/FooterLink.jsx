/* eslint-disable react/prop-types */

const FooterLink = ({ img, href }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        className="group w-[50px] h-[50px] rounded-full bg-slate-700 hover:bg-slate-100 transition-colors flex items-center justify-center"
      >
        <img
          src={img}
          alt="link"
          className="invert group-hover:invert-0 w-7 h-7"
        />
      </a>
    </div>
  );
};
export default FooterLink;
