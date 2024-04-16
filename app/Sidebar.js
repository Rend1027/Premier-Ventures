import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar min-h-screen fixed left-0 top-0 w-64 bg-gray-800 text-white p-4">
      <ul>
        <li style={{ marginBottom: "25px" }}>
          <Link href="/">Home</Link>
        </li>
        <li style={{ marginBottom: "25px" }}>
          <Link href="/properties">Properties</Link>
        </li>
        <li style={{ marginBottom: "25px" }}>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/homeowners">Homeowners</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
