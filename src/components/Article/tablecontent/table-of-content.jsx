"use client";

import React, { useState } from "react";
import TableContent from "@/components/Article/tablecontent/tablecontent";

export default function TableOfContent() {
  const [activeLink, setActiveLink] = useState(null);

  return (
    <>
    <div className="text-base font-medium">
      <ul className="list-none">
        <TableContent
          linktitle="pendahuluan"
          title="A. Pendahuluan"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <TableContent
          linktitle="langkah-langkah"
          title="B. Langkah-Langkah"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <TableContent
          linktitle="1"
          title="1: Navigasi ke Menu Services"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <TableContent
          linktitle="2"
          title="2: Pilih Layanan Kilat VM 2.0 yang Hendak Anda Reset Passwordnya"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
        <TableContent
          linktitle="3"
          title="3: Login ke VM Menggunakan Temporary Password yang Baru"
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        />
      </ul>
      </div>
    </>
  );
}
