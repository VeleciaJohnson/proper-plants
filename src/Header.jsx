import "./Header.css";

export default function Header({ cartItemCount }) {
  return (
    <header className="site-header">
      <div className="header-content">
        <a className="logo" href="/">
          <span aria-hidden="true">🪴</span>
          Proper Plants
        </a>

        <p className="header-cart">
          Cart: <strong>{cartItemCount}</strong>
        </p>
      </div>
    </header>
  );
}