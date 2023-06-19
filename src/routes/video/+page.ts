import type { PageLoad } from "./$types";

type Video = {
  "title": string;
  "videoId": string;
  "videoThumbnails": {
    "quality": string;
    "url": string;
    "width": number;
    "height": number;
  }[];
  "description": string;
  "descriptionHtml": string;
  "published": number;
  "publishedText": string;
  "keywords": string[];
  "viewCount": number;
  "likeCount": number;
  "dislikeCount": number;
  "paid": boolean;
  "premium": boolean;
  "isFamilyFriendly": boolean;
  "allowedRegions": string[];
  "genre": string;
  "genreUrl": string;
  "author": string;
  "authorId": string;
  "authorUrl": string;
  "authorThumbnails": {
    "url": string;
    "width": number;
    "height": number;
  }[];
  "subCountText": string;
  "lengthSeconds": number;
  "allowRatings": boolean;
  "rating": number;
  "isListed": boolean;
  "liveNow": boolean;
  "isUpcoming": boolean;
  "premiereTimestamp": number | undefined;
  "hlsUrl": string | undefined;
  "adaptiveFormats": {
    "index": string;
    "bitrate": string;
    "init": string;
    "url": string;
    "itag": string;
    "type": string;
    "clen": string;
    "lmt": string;
    "projectionType": number;
    "container": string;
    "encoding": string;
    "qualityLabel": string | undefined;
    "resolution": string | undefined;
  }[];
  "formatStreams": {
    "url": string;
    "itag": string;
    "type": string;
    "quality": string;
    "container": string;
    "encoding": string;
    "qualityLabel": string;
    "resolution": string;
    "size": string;
  }[];
  "captions": {
    "label": string;
    "languageCode": string;
    "url": string;
  }[];
  "recommendedVideos": {
    "videoId": string;
    "title": string;
    "videoThumbnails": {
      "quality": string;
      "url": string;
      "width": number;
      "height": number;
    }[];
    "author": string;
    "lengthSeconds": number;
    "viewCountText": string;
  }[];
};

type Comment = {
  "commentCount": number | undefined;
  "videoId": string;
  "comments": {
    "author": string;
    "authorThumbnails": {
      "url": string;
      "width": number;
      "height": number;
    }[];
    "authorId": string;
    "authorUrl": string;
    "isEdited": boolean;
    "isPinned": boolean;
    "content": string;
    "contentHtml": string;
    "published": number;
    "publishedText": string;
    "likeCount": number;
    "commentId": string;
    "authorIsChannelOwner": boolean;
    "creatorHeart": {
      "creatorThumbnail": string;
      "creatorName": string;
    } | undefined;
    "replies": {
      "replyCount": number;
      "continuation": string;
    } | undefined;
  }[];
  "continuation": string | undefined;
};

export const load: PageLoad = ({ fetch, url }) => {
  const videoId = url.searchParams.get("id") || "";

  return {
    video: fetch(
      `https://vid.puffyan.us/api/v1/videos/${videoId}`,
    ).then((r) => r.json()) as Promise<Video>,
    comment: fetch(
      `https://vid.puffyan.us/api/v1/comments/${videoId}`,
    ).then((r) => r.json()) as Promise<Comment>,
  };
};
