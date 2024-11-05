import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const Tag = ({ children, color }) => (
  <span
    className={`inline-block px-3 py-1 rounded-md text-4xl font-semibold ${color} m-1`}
  >
    {children}
  </span>
);

export default function ArticleTag({ tag, bgColor }) {
  return (
  
          <Tag color={bgColor}>{tag}</Tag>
  );
}
