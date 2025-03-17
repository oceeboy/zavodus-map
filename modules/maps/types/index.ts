export type FullLocationData = {
  id: any;
  latitude: number;
  longitude: number;
};
type GeoJSONFeature = {
  type: "Feature";
  properties: FullLocationData;

  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
};

type GeoData = {
  features: GeoJSONFeature[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  point: {
    x: number;
    y: number;
  };
};

export type RouteData = {
  routes?: {
    weight_name?: string;
    weight?: number;
    duration?: number;
    distance?: number;
    legs?: {
      via_waypoints?: any[];
      annotation?: {
        distance?: number[];
        duration?: number[];
      };
      admins?: {
        iso_3166_1_alpha3?: string;
        iso_3166_1?: string;
      }[];
      weight?: number;
      duration?: number;
      steps?: {
        intersections?: {
          entry?: boolean[];
          bearings?: number[];
          duration?: number;
          turn_weight?: number;
          turn_duration?: number;
          mapbox_streets_v8?: {
            class?: string;
          };
          is_urban?: boolean;
          admin_index?: number;
          out?: number;
          geometry_index?: number;
          location?: [number, number];
          stop_sign?: boolean;
          in?: number;
          weight?: number;
          classes?: string[];
        }[];
        maneuver?: {
          type?: string;
          instruction?: string;
          bearing_after?: number;
          bearing_before?: number;
          location?: [number, number];
          modifier?: string;
        };
        name?: string;
        duration?: number;
        distance?: number;
        driving_side?: string;
        weight?: number;
        mode?: string;
        geometry?: {
          coordinates?: [number, number][];
          type?: string;
        };
        ref?: string;
      }[];
      distance?: number;
      summary?: string;
    }[];
    geometry?: {
      coordinates?: [number, number][];
      type?: string;
    };
  }[];
};

// GELO nameee

type Coordinates = {
  longitude: number;
  latitude: number;
  accuracy?: string;
  routable_points?: Array<{
    name: string;
    latitude: number;
    longitude: number;
  }>;
};

type Context = {
  address?: {
    mapbox_id: string;
    address_number: string;
    street_name: string;
    name: string;
  };
  street?: { mapbox_id: string; name: string };
  neighborhood?: { mapbox_id: string; name: string; wikidata_id: string };
  postcode?: { mapbox_id: string; name: string };
  place?: { mapbox_id: string; name: string; wikidata_id: string };
  district?: { mapbox_id: string; name: string; wikidata_id: string };
  region?: {
    mapbox_id: string;
    name: string;
    wikidata_id: string;
    region_code: string;
    region_code_full: string;
  };
  country?: {
    mapbox_id: string;
    name: string;
    wikidata_id: string;
    country_code: string;
    country_code_alpha_3: string;
  };
};

export type FeatureProperties = {
  mapbox_id: string;
  feature_type: string;
  full_address: string;
  name: string;
  name_preferred: string;
  coordinates: Coordinates;
  place_formatted: string;
  bbox?: [number, number, number, number]; // Optional: Used for features like regions and places
  context: Context;
};

type Geometry = {
  type: "Point"; // Based on the provided data structure
  coordinates: [number, number]; // Longitude, Latitude
};

type Feature = {
  type: "Feature";
  id: string;
  geometry: Geometry;
  properties: FeatureProperties;
};

type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
};

// Example usage: this is a sample data from the api request i made
const data: FeatureCollection = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      id: "dXJuOm1ieGFkcjoyZmNjMTIxMi0wMWM5LTQ2NTgtOTliYi00M2U0YmIwZDRiNzQ",
      geometry: {
        type: "Point",
        coordinates: [-122.433219, 37.761739],
      },
      properties: {
        mapbox_id:
          "dXJuOm1ieGFkcjoyZmNjMTIxMi0wMWM5LTQ2NTgtOTliYi00M2U0YmIwZDRiNzQ",
        feature_type: "address",
        full_address:
          "456 Noe Street, San Francisco, California 94114, United States",
        name: "456 Noe Street",
        name_preferred: "456 Noe Street",
        coordinates: {
          longitude: -122.433219,
          latitude: 37.761739,
          accuracy: "rooftop",
          routable_points: [
            { name: "default", latitude: 37.761757, longitude: -122.432877 },
          ],
        },
        place_formatted: "San Francisco, California 94114, United States",
        context: {
          address: {
            mapbox_id:
              "dXJuOm1ieGFkcjoyZmNjMTIxMi0wMWM5LTQ2NTgtOTliYi00M2U0YmIwZDRiNzQ",
            address_number: "456",
            street_name: "Noe Street",
            name: "456 Noe Street",
          },
          street: {
            mapbox_id:
              "dXJuOm1ieGFkci1zdHI6MmZjYzEyMTItMDFjOS00NjU4LTk5YmItNDNlNGJiMGQ0Yjc0",
            name: "Noe Street",
          },
          neighborhood: {
            mapbox_id: "dXJuOm1ieHBsYzpKbEFNN0E",
            name: "The Castro",
            wikidata_id: "Q956169",
          },
          postcode: {
            mapbox_id: "postcode.1881004418164262",
            name: "94114",
          },
          place: {
            mapbox_id: "dXJuOm1ieHBsYzpFVzBJN0E",
            name: "San Francisco",
            wikidata_id: "Q62",
          },
          district: {
            mapbox_id: "dXJuOm1ieHBsYzpBVG1HN0E",
            name: "San Francisco County",
            wikidata_id: "Q62",
          },
          region: {
            mapbox_id: "dXJuOm1ieHBsYzpCbVRz",
            name: "California",
            wikidata_id: "Q99",
            region_code: "CA",
            region_code_full: "US-CA",
          },
          country: {
            mapbox_id: "dXJuOm1ieHBsYzpJdXc",
            name: "United States",
            wikidata_id: "Q30",
            country_code: "US",
            country_code_alpha_3: "USA",
          },
        },
      },
    },
  ],
};
