function processData(data: unknown): string {
  return typeof data === "string" ? data.toUpperCase() : "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
