# getStaticProps = “Get my data ahead of time, during build.”

getStaticProps is a special function you export from a page file. It runs at build time — not on every request — and fetches the data your page needs before it’s turned into static HTML.

# Form submission with nextjs server handling

The action attribute on the <form> specifies the server-side function that will handle the form submission.
<form action={handleSubmit}>
handleSubmit is a server function marked with "use server" (defined outside your client component).

When the user submits the form, Next.js sends the form data directly to that server function.

No need to write separate API routes or manual fetch calls — Next.js handles all that for you under the hood.

