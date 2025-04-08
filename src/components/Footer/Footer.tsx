import SeoFooterComponent from "../seoFooter/seoFooter";
import "./footer.scss";

export default function FooterComponent() {
  return (
    <footer>
      <SeoFooterComponent />
      <div className="bottom">
        <p>
          This project is developed, designed and maintained by{" "}
          <a href="https://www.pixismith.com" target="_blank" rel="noreferrer">
            Pixismith
          </a>
          . You can contribute to this project on{" "}
          <a
            href="https://github.com/SBRakeshRath/pixi-quiz"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </p>
      </div>
    </footer>
  );
}
