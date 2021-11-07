var start = 1
var end = 1000
var total = 0

for (start; start <= end; start++) {
  for (i = 1; i < start; i++) {
    if (start % i == 0) total += i
  }

  if (total == start && start != 0) {
    console.log(start + " ")
  }
  
  total = 0;
}
