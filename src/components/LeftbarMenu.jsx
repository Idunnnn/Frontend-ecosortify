import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const menuData = [
  {
    section: "Main content",
    items: [
      {
        id: "organic",
        title: "Organic Waste",
        links: [
          { name: "Apa itu organic?", href: "/guide/organic/intro" },
          { name: "Manfaat", href: "/guide/organic/benefit" },
        ],
      },
      {
        id: "anorganic",
        title: "Anorganic Waste",
        links: [
          { name: "Definisi", href: "/guide/anorganic/intro" },
          { name: "Jenis-jenis", href: "/guide/anorganic/types" },
        ],
      },
      {
        id: "b3",
        title: "B3 Waste",
        links: [
          { name: "Apa itu B3?", href: "/guide/b3/intro" },
          { name: "Cara penanganan", href: "/guide/b3/handling" },
        ],
      },
      {
        id: "elektronik",
        title: "Elektronik Waste",
        links: [{ name: "Apa itu elektronik waste?", href: "/guide/elektronik/intro" }],
      },
      {
        id: "medic",
        title: "Medic Waste",
        links: [{ name: "Penanganan limbah medis", href: "/guide/medic/handling" }],
      },
    ],
  },
];

export default function LeftbarMenu() {
  const [openItems, setOpenItems] = useState([]);

  const toggle = (id) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  return (
    <>
      {menuData.map((section) => (
        <div key={section.section} className="mb-8 text-[#393939]">
          <h2 className="font-bold mb-2">{section.section}</h2>
          <ul className="space-y-2 ml-3">
            {section.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left font-medium hover:font-semibold flex gap-2 items-center"
                >
                  <p>{item.title}</p>
                  <Icon
                    icon="mdi:chevron-right"
                    className={`transition-transform duration-200 text-xl ${
                      openItems.includes(item.id) ? "rotate-90" : "rotate-0"
                    }`}
                  />
                </button>
                <ul
                  className={`mt-1 ml-3 pl-3 text-sm text-gray-600 space-y-2 list-disc pt-1 transition-all duration-300 ${
                    openItems.includes(item.id) ? "block" : "hidden"
                  }`}
                >
                  {item.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="hover:font-semibold transition duration-200 block">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
