function checkDogs(dogsJulia: number[], dogsKate: number[]): void {
    const correctedDogsJulia = dogsJulia.slice(1, -2);

    const allDogs = correctedDogsJulia.concat(dogsKate);

    allDogs.forEach((age, index) => {
        const type = age >= 3 ? 'adult' : 'puppy';
        console.log(`Dog number ${index + 1} is an ${type}, and is ${age} years old.`);
    });
}

const juliasData1 = [3, 5, 2, 12, 7];
const katesData1 = [4, 1, 15, 8, 3];
const juliasData2 = [9, 16, 6, 8, 3];
const katesData2 = [10, 5, 6, 1, 4];

console.log('Test Data 1:');
checkDogs(juliasData1, katesData1);

console.log('\nTest Data 2:');
checkDogs(juliasData2, katesData2);
