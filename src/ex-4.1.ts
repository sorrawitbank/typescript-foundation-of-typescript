type User = {
  id: string;
  name: string;
  age?: number;
};

function isAdult(user: User): boolean {
  return user.age ? user.age >= 18 : false;
}

const result = isAdult({ id: "u01", name: "John" });
console.log(result); // ควรได้ false

// Error ที่เจอคือ user.age เพราะมีโอกาสที่จะเป็น undefined ซึ่งจะทำให้ผลจากการเปรียบเทียบไม่ได้เป็น boolean เสมอไป
