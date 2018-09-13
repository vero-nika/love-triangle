/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var length = preferences.length; 
  var count = 0;  
  for (let i = 0; i<length; ++i) { 
   let a=preferences[i]-1;if (a == i) continue; 
   let b=preferences[a]-1;if (b == a) continue;
   let c=preferences[b]-1;if (c == b) continue;
  if (i==c)
    {count++}
     }
     return count/3;
};