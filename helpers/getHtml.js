export const html = (src) => {
    return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body, html {
            margin: 0;
            padding: 0;
          }
          .video-container {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .video {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <div class="video-container">
          <video class="video" controls autoplay playsinline webkit-playsinline allowfullscreen>
            <source src=${src} type="video/mp4">
          </video>
        </div>
      </body>
    </html>
    `
}