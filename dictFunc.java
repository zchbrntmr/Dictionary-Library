public boolean isAdjective(String checkFor){
  String[] adjectives={"amazing","cold","funny","smart"};
  for(int i=0;i<=adjectives.length;i++){
    if(adjectives[i]==checkFor.toLowerCase()){
      return true;
    }
  }
  return false;
}
public boolean isName(String checkFor){
  String[] names={};
  for(int i=0;i<=names.length;i++){
    if(names[i]==checkFor.toLowerCase(){
      return true;
    }
  }
  return false;
}
public boolean isNoun(String checkFor){
  String[] nouns={};
  for(int i=0;i<=nouns.length;i++){
    if(nouns[i]==checkFor.checkFor()){
      return true;
    }
  }
  return false;
}

