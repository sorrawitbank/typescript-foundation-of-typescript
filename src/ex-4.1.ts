type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return (user.age ?? 0) >= 18;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ
// error บรรทัดที่ 8 เนื่องจาก age เป็นค่า optional ที่ใส่ก็ได้หรือไม่ใส่ก็ได้ ในส่วนของ isAdult ไม่ได้ใส่ค่า age มาจึงต้องแก้ error ที่ user.age โดยเพิ่ม ?? 0 (เพื่อบอกว่า ถ้าไม่มีค่า age ให้แทนค่าเป็น 0)