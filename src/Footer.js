import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <a
        className="footer-link"
        href="https://github.com/kitdog123/react-weather-app-1"
      >
        Open Source Code
      </a>
      by Kitty <br />
      Hosted on
      <a className="footer-link" href="https://www.netlify.com/">
        Netlify
      </a>
      <br />
      Animated icons by
      <a
        className="footer-link"
        href="https://www.flaticon.com/free-animated-icons/weather"
      >
        Flat Icon
      </a>
    </footer>
  );
}
