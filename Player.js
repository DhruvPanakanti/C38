//creating a class caled player
class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
  }
  //creating a function called getCount
  getCount(){
    //playerCount will be referring playerCount 
    var playerCountRef = database.ref('playerCount');
    //playerCount will be reffering the value of data in the database when it is on 
    playerCountRef.on("value",(data)=>{
      //playerCount is equal to the database values
      playerCount = data.val();
    })
  }
   //creating a function called updateCount
  updateCount(count){
    //we will be reffering the whole database.It is done by using'/'
    database.ref('/').update({
      playerCount: count
      
    });
  }
   //we are updating the player index from players to player
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
   //to reffer the whole database and get the players info 
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  //to check how many cars had come at the end
  getcarsAtEnd(){
    database.ref('carsAtEnd').on("value",(data)=>{
   this.rank=data.val();
    });
  }
  //to rffer the whole database and update it
    static updatecarsAtEnd(rank){
      database.ref('/').update({
        carsAtEnd:rank
      })
    }
  
}
