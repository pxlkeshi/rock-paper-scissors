const UserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput==="scissors"||userInput==='bomb') {
    return userInput;
  } else {
    console.log('error');
  }
};
const ComputerChoice=()=>{
  const random=Math.floor(Math.random()*3)
  if (random===0){
    return 'rock'
  }else if (random===1){
    return 'paper'
  } else{
    return 'scissors'
  }
}
const determineWinner=(UserChoice,ComputerChoice)=>{
  if(UserChoice===ComputerChoice){
    return 'game was a tie'
  }else if (UserChoice==='rock'&&ComputerChoice==='scissors'){
    return 'you win'
  }else if (UserChoice==='scissors'&&ComputerChoice==='paper'){
    return 'you win'
  }else if (UserChoice==='paper'&&ComputerChoice==='rock'){
    return 'you win'
  }else if(UserChoice==='bomb'){
    return 'you win explosively'
  }else{
    return 'you lose'
  }
}
 const playGame = () => {
  const player = UserChoice('bomb');
  const computer = ComputerChoice();
  console.log(determineWinner(player,computer))
}
playGame()
