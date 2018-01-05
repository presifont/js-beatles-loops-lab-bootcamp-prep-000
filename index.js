function theBeatlesPlay(musicians, instruments) {
    var allPlayers = [];
    for (var i=0; i < musicians.length; i++) {
       allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}