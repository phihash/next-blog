import {
  createClient,
  type MicroCMSImage,
  type MicroCMSListContent,
} from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

export type Blog = MicroCMSListContent & {
  title: string;
  body: string;
  tags: string[];
  eye_catch: MicroCMSImage;
};
