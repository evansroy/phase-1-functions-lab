// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  const hq = 42;
  return Math.abs(blockNumber - hq);
}

function distanceFromHqInFeet(blockNumber) {
  const blocks = distanceFromHqInBlocks(blockNumber);
  const feetPerBlock = 264;
  return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
  
  return Math.abs(destination - start) * 264;
  
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance > 2500) {
    return 'cannot travel that far';
  } else if (distance > 2000) {
    return 25;
  } else if (distance > 400) {
    return (distance - 400) * 0.02;
  } else {
    return 0;
  }
}

