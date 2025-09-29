function numberOfPhotos(size, driveCapacity) {
  return Math.floor((driveCapacity * 1000) / size);
}

console.log(numberOfPhotos(1, 1));
console.log(numberOfPhotos(2, 1));
console.log(numberOfPhotos(4, 256));
console.log(numberOfPhotos(3.5, 750));
console.log(numberOfPhotos(3.5, 5.5));