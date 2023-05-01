import NextHead from "next/head";
import React from "react";

type HeadPropType = {
  title: string;
  description: string;
};

function Head({ title, description }: HeadPropType) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  );
}

export default Head;
