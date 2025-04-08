import Image from "next/image";
import siteLogo from "./logo.webp";
import "./nav.scss";
import Link from "next/link";
export default function NavBar() {
  return (
    <header>
      <nav>
        <div className="logoContainer">
  
          <Link href="/">
            <Image
              src={siteLogo}
              alt="logo of pixi quiz"
              height={60}
              priority
            />
          </Link>
        </div>

        <div className="linksContainer">
          <Link href="/" className="newQuizButton">
            {/* Enter a topic */}
            Enter a topic
          </Link>
        </div>
      </nav>
    </header>
  );
}
