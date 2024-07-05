const API_URL =
  "https://667d55a2297972455f64a5d2.mockapi.io/api/fitness/:endpoint";

export async function getProducts() {
  const res = await fetch(`${API_URL}`);
  const data = await res.json();
  return data;
}
