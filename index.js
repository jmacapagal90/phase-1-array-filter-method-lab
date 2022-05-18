// Code your solution here

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers,string){
  const newArray = drivers.filter(object => object.toUpperCase() === string.toUpperCase());
  return newArray;
}

function fuzzyMatch(drivers,string){
  const newArray = drivers.filter(object => object.charAt(0) === string.charAt(0));
  return newArray;
}

function matchName(drivers,string){
  const newArray = drivers.filter(object => object.name === string);
  return newArray;
}
