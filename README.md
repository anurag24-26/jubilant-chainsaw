# बड़हलगंज - Coming Soon page (Next.js)

1. `npm install`
2. Copy `.env.example` to `.env.local` and fill the 3 values.
3. `npm run dev` to preview, `npm run build` to check production.
4. Deploy on Vercel (import the project, add the same env vars), then connect your domain.

## Google Search Console
1. Add property: URL prefix, your https domain.
2. Verify: choose "HTML tag", paste only the `content` value into `NEXT_PUBLIC_GSC_TOKEN`, redeploy, click Verify.
3. Sitemaps: submit `sitemap.xml`.
4. URL Inspection: paste your home URL, click "Request indexing".


## Google Form
Paste the form link into `NEXT_PUBLIC_FORM_URL`. The page embeds it in the "list your business" section.
