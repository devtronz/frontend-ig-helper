function openEmbed() {
  const input = document.getElementById("url").value.trim();
  const frame = document.getElementById("frame");

  const match = input.match(/\/(p|reel|tv)\/([^\/]+)/);

  if (!match) {
    frame.innerHTML = "Invalid Instagram link";
    return;
  }

  const type = match[1];
  const code = match[2];

  const embedUrl =
    `https://www.instagram.com/${type}/${code}/embed/captioned/`;

  frame.innerHTML =
    `<iframe src="${embedUrl}" allowfullscreen></iframe>`;
}
