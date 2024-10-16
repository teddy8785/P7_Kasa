import "../styles/Banner.css";

function Banner({ src, alt, className, children }) {

  return (
    <div className="banner">
     <img src={src} alt={alt} className={className} />
     {children}
    </div>
  );
}

export default Banner;