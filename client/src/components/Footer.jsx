import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="py-8 block">
      <h6 className="text-xl font-medium text-center">Follow our socials!</h6>
      <div className="flex justify-center space-x-8 mt-2">
        <Link
          to="https://www.instagram.com/lifelist.app/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="
          target="_blank"
        >
          <i className="fa-brands fa-square-instagram cursor-pointer hover:text-[#34CC98] text-4xl duration-200"></i>
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100090150615631"
          target="_blank"
        >
          <i className="fa-brands fa-square-facebook cursor-pointer hover:text-[#34CC98] text-4xl duration-200"></i>
        </Link>
      </div>
    </div>
  );
}
