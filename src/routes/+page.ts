import type { PageLoad } from "./$types";

type Popular = {
  type: "shortVideo";
  title: string;
  videoId: string;
  videoThumbnails: {
    quality: string;
    url: string;
    width: number;
    height: number;
  }[];
  lengthSeconds: number;
  viewCount: number;
  author: string;
  authorId: string;
  authorUrl: string;
  published: number;
  publishedText: string;
}[];

export const load: PageLoad = ({ fetch }) => {
  return {
    popular: fetch(
      "https://vid.puffyan.us/api/v1/popular",
    ).then((r) => r.json()) as Promise<Popular>,
  };
};
