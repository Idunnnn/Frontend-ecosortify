import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const menuData = [
  {
    section: "Main content",
    items: [
      {
        id: "organik",
        title: "Sampah Organik",
        links: [
          { name: "Pengenalan", href: "/guide/sampah-organik/pengenalan" },
          { name: "Jenis Sampah Organik", href: "/guide/sampah-organik/jenis-sampah-organik" },
          { name: "Metode Pembuangan", href: "/guide/sampah-organik/metode-pembuangan" },
        ],
      },
      {
        id: "anorganic",
        title: "Anorganic Waste",
        links: [
          { name: "Pengenalan", href: "/guide/sampah-anorganik/pengenalan" },
          {
            name: "Jenis-Jenis Sampah Anorganik",
            href: "/guide/sampah-anorganik/jenis-sampah-anorganik",
            subLinks: [
              {
                name: "Sampah Plastik",
                href: "/guide/sampah-anorganik/sampah-plastik/pet", // Default link for plastic
                subLinks: [
                  { name: "PET (Kode 1)", href: "/guide/sampah-anorganik/sampah-plastik/pet" },
                  { name: "HDPE (Kode 2)", href: "/guide/sampah-anorganik/sampah-plastik/hdpe" },
                  { name: "PVC (Kode 3)", href: "/guide/sampah-anorganik/sampah-plastik/pvc" },
                  { name: "LDPE (Kode 4)", href: "/guide/sampah-anorganik/sampah-plastik/ldpe" },
                  { name: "PP (Kode 5)", href: "/guide/sampah-anorganik/sampah-plastik/pp" },
                  { name: "PS (Kode 6)", href: "/guide/sampah-anorganik/sampah-plastik/ps" },
                  { name: "OTHER (Kode 7)", href: "/guide/sampah-anorganik/sampah-plastik/other" },
                ],
              },
              {
                name: "Sampah Logam",
                href: "/guide/sampah-anorganik/sampah-logam/aluminium", // Default link for metal
                subLinks: [
                  { name: "Aluminium", href: "/guide/sampah-anorganik/sampah-logam/aluminium" },
                  { name: "Besi dan Baja", href: "/guide/sampah-anorganik/sampah-logam/besi-baja" },
                  { name: "Tembaga", href: "/guide/sampah-anorganik/sampah-logam/tembaga" },
                  { name: "Seng dan Timah", href: "/guide/sampah-anorganik/sampah-logam/seng-timah" },
                ],
              },
              { name: "Sampah Kaca", href: "/guide/sampah-anorganik/sampah-kaca" },
              { name: "Sampah Kertas", href: "/guide/sampah-anorganik/sampah-kertas" },
              { name: "Sampah Kain/Tekstil", href: "/guide/sampah-anorganik/sampah-kain-tekstil" },
              { name: "Sampah Karet", href: "/guide/sampah-anorganik/sampah-karet" },
            ],
          },
        ],
      },
      {
        id: "elektronik",
        title: "Elektronik Waste",
        links: [
          { name: "Pengenalan", href: "/guide/sampah-elektronik/pengenalan" },
          {
            name: "Penanganan E-Waste", // Ini adalah parent untuk sub-penanganan
            href: "/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan", // Link ke halaman penanganan utama
            subLinks: [
              { name: "Tahapan Penanganan Umum", href: "/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan" },
              { name: "Penanganan oleh Individu", href: "/guide/sampah-elektronik/penanganan-sampah-elektronik/penanganan-individu" },
            ],
          },
        ],
      },
      {
        id: "medic",
        title: "Medic Waste",
        links: [
          { name: "Pengenalan", href: "/guide/sampah-medis/pengenalan" },
          {
            name: "Jenis-Jenis Sampah Medis",
            href: "/guide/sampah-medis/jenis-sampah-medis",
            subLinks: [
              { name: "Limbah Infeksius", href: "/guide/sampah-medis/jenis-sampah-medis/infeksius" },
              { name: "Limbah Patologis", href: "/guide/sampah-medis/jenis-sampah-medis/patologis" },
              { name: "Limbah Benda Tajam", href: "/guide/sampah-medis/jenis-sampah-medis/benda-tajam" },
              { name: "Limbah Kimia", href: "/guide/sampah-medis/jenis-sampah-medis/kimia" },
              { name: "Limbah Farmasi", href: "/guide/sampah-medis/jenis-sampah-medis/farmasi" },
              { name: "Limbah Genotoksik", href: "/guide/sampah-medis/jenis-sampah-medis/genotoksik" },
              { name: "Limbah Radioaktif", href: "/guide/sampah-medis/jenis-sampah-medis/radioaktif" },
            ],
          },
        ],
      },
      {
        id: "sampah-residu-b3", // ID untuk folder utama sampah-residu-b3
        title: "Sampah Residu dan B3", // Judul utama
        links: [
          {
            name: "Pengenalan", // Ini adalah file pengenalan.jsx yang langsung di dalam sampah-residu-b3
            href: "/guide/sampah-residu-b3/pengenalan",
          },
          {
            name: "Jenis-Jenis Sampah Residu dan B3", // Ini adalah judul untuk sub-menu
            href: "/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-terkontaminasi", // Link default ke salah satu jenis
            subLinks: [
              {
                name: "Sampah Terkontaminasi",
                href: "/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-terkontaminasi",
              },
              {
                name: "Sampah Komposit",
                href: "/guide/sampah-residu-b3/jenis-sampah-residu-b3/sampah-komposit",
              },
              {
                name: "Plastik Tipe 6 dan 7",
                href: "/guide/sampah-residu-b3/jenis-sampah-residu-b3/plastik-tipe-6-7",
              },
              {
                name: "Kain yang Terkontaminasi",
                href: "/guide/sampah-residu-b3/jenis-sampah-residu-b3/kain-terkontaminasi",
              },
              // Tambahkan jenis-jenis sampah residu/B3 lainnya di sini
            ],
          },
        ],
      },
      {
        id: "others",
        title: "Others",
        links: [
          { name: "Apa itu Sampah?", href: "/guide/apa-itu-sampah" },
          { name: "Apa itu Bank Sampah?", href: "/guide/apa-itu-bank-sampah" },
          { name: "The Great Pacific Garbage Patch", href: "/guide/the-great-pacific-garbage-patch" },
        ],
      },
    ],
  },
];

export default function LeftbarMenu() {
  const [openItems, setOpenItems] = useState([]);
  const [openSubItems, setOpenSubItems] = useState({});

  const toggle = (id) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const toggleSub = (parentId, subId) => {
    setOpenSubItems((prev) => ({
      ...prev,
      [parentId]: prev[parentId]?.includes(subId)
        ? prev[parentId].filter((i) => i !== subId)
        : [...(prev[parentId] || []), subId],
    }));
  };

  const renderLinks = (links, parentId, level = 0) => {
    let listStyle = "list-none";
    if (level === 1) listStyle = "list-disc";
    if (level === 2) listStyle = "list-circle";
    // Jika ada level 3 (sub-sub-sub-menu)
    if (level === 3) listStyle = "list-square";


    const paddingLeft = (level + 1) * 4; // Menambah indentasi untuk setiap level

    return (
      <ul
        className={`mt-1 ml-${paddingLeft} text-sm text-gray-600 space-y-2 ${listStyle} pt-1 transition-all duration-300`}
      >
        {links.map((link) => (
          <li key={link.href}>
            {link.subLinks ? (
              <div>
                <button
                  onClick={() => toggleSub(parentId, link.name)}
                  className="w-full text-left font-medium hover:font-semibold flex gap-1 items-center"
                >
                  <Icon
                    icon="mdi:chevron-right"
                    className={`transition-transform duration-200 text-xl ${
                      openSubItems[parentId]?.includes(link.name) ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  <p>{link.name}</p>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openSubItems[parentId]?.includes(link.name) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {renderLinks(link.subLinks, link.href, level + 1)}
                </div>
              </div>
            ) : (
              <Link href={link.href} className="hover:font-semibold transition duration-200 block">
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {menuData.map((section) => (
        <div key={section.section} className="mb-8 text-gray-800">
          <h2 className="font-bold mb-2">{section.section}</h2>
          <ul className="space-y-2 ml-3">
            {section.items.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full text-left font-medium hover:font-semibold flex gap-1 items-center"
                >
                  <Icon
                    icon="mdi:chevron-right"
                    className={`transition-transform duration-200 text-xl ${
                      openItems.includes(item.id) ? "rotate-90" : "rotate-0"
                    }`}
                  />
                  <p>{item.title}</p>
                </button>
                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    openItems.includes(item.id) ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {/* Pass item.id as parentId for the first level of sub-menus */}
                  {renderLinks(item.links, item.id)}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}