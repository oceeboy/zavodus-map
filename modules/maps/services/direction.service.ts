export async function getDirection(
  from: [number, number],
  to: [number, number]
) {
  const params = new URLSearchParams({
    alternatives: "false",
    annotations: "distance,duration",
    continue_straight: "true",
    geometries: "geojson",
    language: "en",
    overview: "full",
    steps: "true",
    access_token: `${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
  });

  const url = `${process.env.EXPO_PUBLIC_BASE_DIRECTION_WALKING_URL}/walking/${from[0]},${from[1]};${to[0]},${to[1]}?${params}`;

  const data = await fetch(url);
  const response = await data.json();

  if (response) {
    return response;
  }

  throw new Error("No route found or API error.");
}

export async function getGeocoding(longitude: number, latitude: number) {
  const params = new URLSearchParams({
    longitude: longitude.toString(),
    latitude: latitude.toString(),
    access_token: `${process.env.EXPO_PUBLIC_ACCESS_TOKEN}`,
  });

  const url = `${process.env.EXPO_PUBLIC_BASE_GEOCODE_URL}?${params}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();

    const result = await data?.features[1]?.properties;
    return result;
  } catch (error) {
    console.error("Geocoding error:", error);
    throw new Error("Failed to fetch geocoding data.");
  }
}
