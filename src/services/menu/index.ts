export async function getMainMenu() {
  const res = await fetch("http://localhost:3000/api/menu/", {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });
  if (!res.ok) throw new Error("Failed to fetch menu");
  return res.json();
}
