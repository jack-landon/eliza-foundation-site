import Link from "next/link";

const links = [
  "About",
  "Projects",
  "Funding and Support",
  "Decentralized Nodes",
  "Education",
  "Research",
  "Careers",
  "Blog",
];

function convertToLink(link: string) {
  return link.toLowerCase().replace(" ", "-");
}

export default function Header() {
  return (
    <div className="flex text-white justify-between items-center py-4 px-8 absolute top-0 left-0 w-full z-10">
      <img src="/logo.png" alt="" className="h-12" />
      <div className="flex gap-6 items-center">
        {links.map((link) => (
          <Link
            href={`/${convertToLink(link)}`}
            key={link}
            className="font-semibold hover:underline"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
}
