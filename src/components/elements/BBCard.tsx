import React from "react";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Article } from "@/types/type";

interface bbDataProps {
  bbData: Article;
}

const BBCard = ({ bbData }: bbDataProps) => {
  const { id, title, content } = bbData;
  //ここでユーザー名を取得して格納する
  const username = "テスト"

  return (
    <div>
      <Card className="text-black">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{username}</CardDescription>
        </CardHeader>
        <CardContent className="w-full">{content}</CardContent>
        <CardFooter className="flex justify-between">
          <Link href={`/posts/${id}`} className="text-blue-500">
            Read More
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BBCard;
