/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    let first = expressions[0] < expressions[1] ? expressions[0] : expressions[1];
    let second = expressions[0] > expressions[1] ? expressions[0] : expressions[1];
    let s1 = (first + Math.sqrt(first**2 - 16 * second)) / 4;
    let s2 = (first - Math.sqrt(first**2 - 16 * second)) / 4;
    return [s1, s2].sort((a, b) => a - b);
}