/**
 * Updates a class in an array based on a prefix and a new value.
 * @param {Array<string>} classList - The array of class names to update.
 * @param {string} prefix - The prefix of the class name to replace (e.g., "bg-").
 * @param {string} newClass - The new class name to add (e.g., "bg-gradient-to-r ...").
 * @returns {Array<string>} - The updated array of class names.
 */
export function updateClassByPrefix(classList, prefix, newClass) {
	return [...classList.filter((className) => !className.startsWith(prefix)), newClass];
}
