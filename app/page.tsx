import {
  createClient,
  type MicroCMSImage,
  type MicroCMSListContent,
} from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN!,
  apiKey: process.env.MICROCMS_API_KEY!,
});

type Blog = MicroCMSListContent & {
  title: string;
  body: string;
  tags: string[];
  eye_catch: MicroCMSImage;
};

export default async function Home() {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });
  console.log(data);
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>とぷ</p>
      <div>
        {data.contents.map((item: Blog) => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
}

// type MicroCMSImage,
// type MicroCMSListContent,がある
