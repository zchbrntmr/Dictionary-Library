/*

  Copyright (C) 2013 Zach Brantmeier
  
*/

/*

  The functions below can be used as conditionals to check/compare strings, for instance, to check if a word is a name or not in order to determine the correct response

*/
function isNoun(checkFor){
  checkFor.toLowerCase();
  var nouns=["apple","banana","car","cat","dog","elephant","pencil","ruler","xylophone","yacht","zebra","zygote"];
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
  var adjectives=["angry","bad","creative","deceptive","funny","helpful","intelligent","interesting","mean","peaceful","smart","yellow"];
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
  var names=["alex","andrew","amy","bill","justin","lily","marcus","mark","matt","matthew","steve","steven","will","william","zach","zachary"];
  for(var i=-1;i<=names.length;i++){
    if(names[i]==checkFor){
      return true;
    }else{
      return false;
    }
  }
}
