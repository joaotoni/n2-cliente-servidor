import GithubIcon from "/Assets/Icons/github.svg";
import LinkedinIcon from "/Assets/Icons/linkedin.svg";

export default function Footer() {
  return (
    <footer className="flex items-center justify-center px-3 mt-12 space-x-4 bg-gradient-to-t from-orange-900 to-orange-500 py-4">
      <h2 className="text-white text-[18px]">Powered by João Antonio</h2>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-ant%C3%B4nio-martins-taveira-a4a599224/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn Profile"
      >
        <img src={LinkedinIcon} alt="LinkedIn Icon" width={30} />
      </a>
      <a
        href="https://github.com/joaotoni"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub Profile"
      >
        <img src={GithubIcon} alt="GitHub Icon" width={30} />
      </a>
    </footer>
  );
}
