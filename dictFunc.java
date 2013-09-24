public boolean isAdjective(String checkFor){
  String checkForLC=checkFor.toLowerCase();
  String[] adjectives={"amazing","cold","funny","smart"};
  for(int i=-1;i<=adjectives.length;i++){
    if(adjectives[i]==checkForLC){
      return true;
    }else{
      return false;
    }
  }
}
public boolean isName(String checkFor){
  String checkForLC=checkFor.toLowerCase();
  String[] names={};
  for(int i=-1;i<=names.length;i++){
    if(names[i]==checkForLC){
      return true;
    }else{
      return false;
    }
  }
}
public boolean isNoun(String checkFor){
  String checkForLC=checkFor.toLowerCase();
  String[] nouns={};
  for(int i=-1;i<=nouns.length;i++){
    if(nouns[i]==checkForLC){
      return true;
    }else{
      return false;
    }
  }
}

