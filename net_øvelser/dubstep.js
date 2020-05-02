function songDecoder(song){
    let xd = song.replace(/WUB/g, " ");
    return xd.replace(/\s+/g, " ").trim();
}



console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"));