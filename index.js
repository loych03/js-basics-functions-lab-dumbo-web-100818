// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
  if (blocks>=42){
    return blocks-42;
  }else{
    return 42-blocks;
    }
}

function distanceFromHqInFeet(blocks){
  return distanceFromHqInBlocks(blocks)*264;
}

function distanceTravelledInFeet(start, destination){
  if (start>destination){
    return (start-destination)*264;
  }else if(destination>start){
    return (destination-start)*264;
  }
}

function calculatesFarePrice(start, destination){
  distance =  distanceTravelledInFeet(start, destination);
  if (distance <= 400){
    return 0;
  }else if (distance > 2500){
    return 'cannot travel that far';
  }else if (distance > 400 && distance<2000){
    return ((distance-400) * 0.02);
  }else if (distance > 2000){
    return 25;
  }
  }
