import { client, type Blog } from "@/app/lib/microcms";
import Link from "next/link";

export default async function Home() {
  const data = await client.getList<Blog>({
    endpoint: "blog",
  });

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>とぷ</p>
      思ったことを書く
      <hr />
      <div>
        {data.contents.map((item: Blog) => {
          return (
            <div key={item.id}>
              <Link href={`/blog/${item.id}`}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// type MicroCMSImage,
// type MicroCMSListContent,がある
