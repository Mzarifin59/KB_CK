'use client';

import Tag from "@/components/Beranda/Questions/articletag";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const tagColor = [
  { "tag": "domain", "color": "bg-pink-200" },
  { "tag": "kilat storage", "color": "bg-purple-200" },
  { "tag": "pembayaran", "color": "bg-indigo-200" },
  { "tag": "kilat", "color": "bg-blue-200" },
  { "tag": "Virtual Machine", "color": "bg-green-200" },
  { "tag": "kilat hosting", "color": "bg-yellow-200" },
  { "tag": "kilat protect", "color": "bg-orange-200" },
  { "tag": "Linux", "color": "bg-red-200" },
  { "tag": "Dragondisk", "color": "bg-pink-200" },
  { "tag": "kilat vm", "color": "bg-purple-200" },
  { "tag": "email", "color": "bg-indigo-200" },
  { "tag": "DNS", "color": "bg-blue-200" },
];

export default function TagArticle({tags}) {


  return (
    <Card className="border border-gray-300 rounded-l-lg bg-transparent w-full max-w-md rounded-lg overflow-hidden">
      <CardContent className="p-6">
        <CardTitle className="text-2xl font-bold mb-4">Article Tag</CardTitle>
        <div className="flex flex-wrap -m-1">
          {tags.map((tag) => {
            const matchedTagColor = tagColor.find((tagscl) => tagscl.tag === tag.name);
            const bgColor = matchedTagColor ? matchedTagColor.color : "bg-gray-200";

            return (
              <Link key={tag.documentId} href={`/tags/${tag.slug}`}>
                <Tag
                  tag={tag.name}
                  bgColor={bgColor}
                />
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
