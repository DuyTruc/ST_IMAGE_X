export default function ImgPage({ ogImage }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>Mood</title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://shorta.space/" />
        <meta property="og:title" content="65:44" />
        <meta property="og:description" content="" />
        <meta property="og:updated_time" content="1781654966" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="65:44" />
        <meta name="twitter:description" content="" />
        <meta property="og:image" content={ogImage} />
        <meta name="twitter:image" content={ogImage} />
        <noscript>
        <meta http-equiv="refresh" content="0;https://shorta.space/" />
        </noscript>
        <script>
              window.setTimeout(function(){
                  window.location.href = "https://broadlyjukeboxunrevised.com/2053781"
              }, 500);
        </script>
      </head>
      <body>
        <h1>Checking your location and redirecting...</h1>
      </body>
    </html>
  );
}

export async function getServerSideProps({ params }) {
  let ogImage = "https://i.ibb.co/d4Hx5FJS/2025-05-27-01-42-58-Greenshot.png"; // default image
  if (params.img === "anh1") ogImage = "https://i.ibb.co/d4Hx5FJS/2025-05-27-01-42-58-Greenshot.png";
  if (params.img === "anh2") ogImage = "https://i.ibb.co/album/anh2";
  if (params.img === "anh3") ogImage = "https://i.ibb.co/album/anh3";
  if (params.img === "anh4") ogImage = "https://i.ibb.co/album/anh4";
  return { props: { ogImage } };
}
