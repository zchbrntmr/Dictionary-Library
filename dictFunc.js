/*

  Copyright (C) 2013 Zach Brantmeier
  
*/

/*

  The functions below can be used as conditionals to check/compare strings
  For instance, to check if a word is a name or not in order to determine the correct response

*/
function isNoun(checkFor){
  var nouns=["apple","banana","car","cat","dog","elephant","pencil","ruler","xylophone","yacht","zebra","zygote"];
  for(var i=-1;i<=nouns.length;i++){
    if(nouns[i]==checkFor.toLowerCase()){
      return true;
    }else{
      return false;
    }
  }
}
function isAdjective(checkFor){
  var adjectives=["angry","bad","creative","deceptive","funny","helpful","intelligent","interesting","mean","peaceful","smart","yellow"];
  for(var i=-1;i<=adjectives.length;i++){
    if(adjectives[i]==checkFor.toLowerCase()){
      return true;
    }else{
      return false;
    }
  }
}
function isName(checkFor){
  var names=["alex","andrew","amy","bill","jack","jake","justin","lily","marcus","mark","matt","matthew","steve","steven","will","william","zach","zachary"];
  for(var i=-1;i<=names.length;i++){
    if(names[i]==checkFor.toLowerCase()){
      return true;
    }else{
      return false;
    }
  }
}
