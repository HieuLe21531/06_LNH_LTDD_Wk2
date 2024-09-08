function calcAverageHumanAge(dogAges: number[]): number {
    const humanAges = dogAges.map((age) => (age <= 2 ? age * 2 : 16 + 4 * age));
    const adultAges = humanAges.filter((age) => age >= 18);

    return adultAges.reduce((sum, age) => sum + age, 0) / adultAges.length;
}

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log('Average Human Age (Data 1):', calcAverageHumanAge(data1));
console.log('Average Human Age (Data 2):', calcAverageHumanAge(data2));
