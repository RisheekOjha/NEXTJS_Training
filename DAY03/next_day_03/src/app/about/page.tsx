// app/about/page.tsx (assuming you're using the App Router)

const AboutPage = async () => {
   const apiurl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const apiurl = process.env.NEXT_PUBLIC_BASE_URL;

    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const data = await response.json();

    const firstFive = data.slice(0, 5);

    return (
      <div>
        {firstFive.map((post: any, index: number) => (
          <div key={post.id}>
            <h1>{apiurl}</h1>
            <h1 style={{ color: "white" }}>
              {index} {post.id}
            </h1>
            <h2>{post.name}</h2>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return <div>Please try again later{apiurl}</div>;
  }
};

export default AboutPage;
