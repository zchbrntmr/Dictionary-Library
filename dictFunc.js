function isNoun(checkFor){
  checkFor.toLowerCase();
  var nouns=["cat","dog","elephant","ruler","xylophone","yacht","zebra","zygote"];
  for(var i=-1;i<=nouns.length;i++){
    if(nouns[i]==checkFor){
      return true;
    }else{
      return false;
    }
  }
}
function isAdjective(checkFor){
  checkFor.toLowerCase();
  var adjectives=["creative","funny","interesting","smart"];
  for(var i=-1;i<=adjectives.length;i++){
    if(adjectives[i]==checkFor){
      return true;
    }else{
      return false;
    }
  }
}
function isName(checkFor){
  checkFor.toLowerCase();
  var names=["alex","andrew","amy","bill","justin","steve","steven","will","william","zach","zachary"];
  for(var i=0;i<=names.length;i++){
    if(names[i]==checkFor){
      return true;
    }else{
      return false;
    }
  }
}
