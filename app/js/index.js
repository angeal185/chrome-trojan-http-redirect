let paths = [{
  src: 'https://some-src-path.com/',
  dest: 'https://some-dest-path.com'
}],
loc = location.href;

for (let i = 0; i < paths.length; i++) {
  if(paths[i].src === loc){
    location.href = paths[i].dest;
  }
}
