(() => {
  // Types
  type UserID = string | number | boolean;
  let userId: UserID;


  // Literal types
  type ShirtSize = 'S' | "M" | "L" | "XL" | false | 123;
  let shirtSize: ShirtSize;
  shirtSize = 'M';
  shirtSize = false;
})();
