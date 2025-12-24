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
//user.age = undefined โดย TypeScript ไม่ยอมให้ undefined >= number จึง error ไม่สามารถ compile ได้
