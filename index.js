const vize = 50;
const final = 100;
const donemNotu = vize * 0.3 + final * 0.7;
let harfNotu;

if (donemNotu >= 90) {
  harfNotu = 'A';
} else if (donemNotu >= 80) {
  harfNotu = 'B';
} else if (donemNotu >= 70) {
  harfNotu = 'C';
} else if (donemNotu >= 60) {
  harfNotu = 'D';
} else if (donemNotu >= 50) {
  harfNotu = 'E';
} else {
  harfNotu = 'F';
}
