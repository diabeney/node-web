(function calculateSeparationFactor() {
  const initialConc = 1000;
  const KL = 0.0191;
  const result = 1 / (1 + KL * initialConc);
  console.log(result);
})();
