import { client, type Blog } from "@/app/lib/microcms";
export default async function BlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: id,
  });
  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.body }} />
    </div>
  );
}
