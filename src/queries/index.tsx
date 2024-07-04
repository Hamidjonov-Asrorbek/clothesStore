"server-only";

export async function GetNewArrials() {
  try {
    const req = await fetch(
      "https://dummyjson.com/products/category/mens-shirts",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    // return error;
  }
}
export async function GetTopSelling() {
  try {
    const req = await fetch(
      "https://dummyjson.com/products/category/womens-dresses",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await req.json();
    return res;
  } catch (error) {
    // return error;
  }
}
