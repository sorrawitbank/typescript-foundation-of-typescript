function processData(data: unknown): string {
  if (typeof data === "string") {
    return data.toUpperCase();
  } else {
    return "Not a string"
  }
}

console.log(processData("hello")); // ควรได้ "HELLO"
console.log(processData(123)); // ควรได้ "Not a string"

// Error ที่เจอคือ
// data มี type เป็น unknown อยู่ไม่สามารถใช้ buildin toUpperCase ที่เป็น คำสั่งของ string ได้ เราจึงต้องใช้ if-else และ typeof เพื่อทำให้ ts อ่าน data ให้อยู่ในสถานะ string ก่อนและสามารถใช้คำสั่ง toUpperCase ต่อได้