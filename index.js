function theBeatlesPlay(musicians, instruments) {
    var allPlayers = [];
    for (var i=0; i < musicians.length; i++) {
       allPlayers.push(musicians[i] + " plays " + instruments[i]);
    }
    return allPlayers;
}
function johnLennonFacts(facts) {
  var i = 0;
  while(facts.length > i) {
     facts.push(facts[i] + "!!!");
     i++

  }
return facts
}
