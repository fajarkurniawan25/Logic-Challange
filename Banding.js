function BandingkanAngka(angka1, angka2) {
  if (angka1<angka2) {
      return true
  }
  if (angka1 > angka2) {
    return false
}
  if (angka1 == angka2) {
    return  -1
}
}
console.log(BandingkanAngka(5 , 8));
console.log(BandingkanAngka(5 , 3));
console.log(BandingkanAngka(4 , 4));
console.log(BandingkanAngka(3 , 3));
console.log(BandingkanAngka(17 , 2));
