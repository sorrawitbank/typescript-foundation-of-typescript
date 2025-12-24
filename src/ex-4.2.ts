function processData(data: unknown): string {
  return typeof data === "string" ? data.toUpperCase() : "Not a string";
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
/* TypeScript ไม่สามารถรู้ได้ว่าจริงแล้ว ๆ data เป็น type อะไรแน่ ๆ เพราะเราให้ data type = unknown, TypeScript จะไม่ยอมให้เอาไปใช้กับ method ได้เลยถ้าไม่ตั้งเงื่อนไขเช็ค type ให้ก่อน*/
