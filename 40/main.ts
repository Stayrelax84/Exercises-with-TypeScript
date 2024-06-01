function make_album(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };
  if (tracks) {
    album.tracks = tracks;
  }
  return album;
}

let album1 = make_album("Edward Maya", "Stereo Love");
let album2 = make_album("Enrique Iglesias", "Euphoria");
let album3 = make_album("Adele", "21", 11);
console.log(album1);
console.log(album2);
console.log(album3);
