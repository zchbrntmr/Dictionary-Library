/*

  The methods below can be used with conditionals to check/compare strings
  For instance, to check if a word is a name or not in order to determine the correct response

*/
String.prototype.isNoun=function(checkFor){
  var nouns=["apple","banana","car","cat","dog","elephant","pencil","ruler","xylophone","yacht","zebra","zygote"];
  for(var i=0;i<=nouns.length;i++){
    if(nouns[i]==checkFor.toLowerCase()){
      return true;
    }
  }
  return false;
}
String.prototype.isAdjective=function(checkFor){
  var adjectives=["angry","bad","creative","deceptive","funny","helpful","intelligent","interesting","mean","peaceful","smart","yellow"];
  for(var i=0;i<=adjectives.length;i++){
    if(adjectives[i]==checkFor.toLowerCase()){
      return true;
    }
  }
  return false;
}
String.prototype.isName=function(checkFor){
  var names=["alex","andrew","amy","bill","jack","jake","justin","lily","marcus","mark","matt","matthew","steve","steven","will","william","zach","zachary"];
  for(var i=0;i<=names.length;i++){
    if(names[i]==checkFor.toLowerCase()){
      return true;
    }
  }
  return false;
}
