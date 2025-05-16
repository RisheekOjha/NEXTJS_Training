interface BlogPostPageProps {
  params: { id: string };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return <h1>Blog post: {params.id}</h1>;
}