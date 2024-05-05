const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");
    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px,
                ${e.offsetY - 13}px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };
  return (
    <menu className="social-network">
      <ul className="content">
        <a
          href="https://www.facebook.com"
          aria-label="Facebook"
          target="_blank"
          className="hover"
        >
          <li>
            <i className="fab fa-facebook-f"></i>
          </li>
        </a>

        <a
          href="https://www.twitter.com"
          target="_blank"
          aria-label="twitter"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-twitter"></i>
          </li>
        </a>

        <a
          href="https://www.instagram.com"
          target="_blank"
          aria-label="Instagram"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-instagram"></i>
          </li>
        </a>
      </ul>
    </menu>
  );
};

export default SocialNetwork;
