var profil = function() {
  for (var i = 0; i < 10000; ) {
    i++;
  }
};

console.profile("Memory");
profil();
console.profileEnd("Memor");
