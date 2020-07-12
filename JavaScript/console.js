console.group("Site Hakkında");
console.error("Html kodları yüklendi");
console.log("Site Hazır");
var yavasDongu = function() {
  for (var i = 0; i < 10000; ) {
    i++;
  }
};
console.time("PİNG");
yavasDongu();
console.timeEnd("PİNG");
console.groupEnd();
console.groupEnd();
