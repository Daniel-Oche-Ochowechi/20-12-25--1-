export const brochureUrlMapping = {
  citizenship: {
    "Antigua and Barbuda": "https://drive.google.com/file/d/1fX73GAeEIxaDJIsB_8RfajSGjTRGJuSy/view?usp=sharing",
    Dominica: "https://drive.google.com/file/d/1FhnW3JZID47rTlYNBJsLF4rDrRGF9vxs/view?usp=sharing",
    Egypt: "https://drive.google.com/file/d/125IHAh3Cs-f3hGW9DX0W7e_O8l7Tc_Jx/view?usp=sharing",
    Grenada: "https://drive.google.com/file/d/1qICRtFbITgNlx0tdqnGaWuRpwz1cvdIu/view?usp=sharing",
    Nauru: "https://drive.google.com/file/d/1-rhsWSGQL9HdAJtQ9J9jZQi4L5nw2oPi/view?usp=sharing",
    "St. Kitts and Nevis": "https://drive.google.com/file/d/1orlrH2csgkwXqbepP3ttghgtD8lMWQI3/view?usp=sharing",
    "St. Lucia": "https://drive.google.com/file/d/1XAG2B69lBXF0nb9bJzcL2D7qa-hrx_Sl/view?usp=sharing",
    Turkey: "https://drive.google.com/file/d/1oceerSOkAckBIIaCJs3akM84wDMZv68k/view?usp=sharing",
    Vanuatu: "https://drive.google.com/file/d/1DG3wQNOJo1o8-L_JQTGxaGpcDqkeH2Mb/view?usp=sharing",
  },
  residency: {
    Canada: "https://drive.google.com/file/d/116fC2oLECZW3iZ6exXYFvvWCkTxlOn88/view?usp=sharing",
    Cyprus: "https://drive.google.com/file/d/1aIIb1H0o6asDspxWfWQ2pvMnnwxh5BMQ/view?usp=sharing",
    Greece: "https://drive.google.com/file/d/1OaPKEw5rbaycnTu-YFWa_Uywc7IniuNd/view?usp=sharing",
    Hungary: "https://drive.google.com/file/d/1TS66qlqmOKzmM1Edgm17GkhUitbp_MEr/view?usp=sharing",
    Italy: "https://drive.google.com/file/d/1GRSfubOP8mGbsr503finea97flQrLft6/view?usp=sharing",
    Malta: "https://drive.google.com/file/d/1SjX0pnUKPzqXI5agyHsLKwOx7WFOOwxA/view?usp=sharing",
    Portugal: "https://drive.google.com/file/d/1gnN-WrtgUB44ckyfQd2VvW1Z1UEQ0WyM/view?usp=sharing",
    "United Arab Emirates": "https://drive.google.com/file/d/1Forbz53yEBC9OT8kBSrEef7MXeAfGaGm/view?usp=sharing",
    "United Kingdom": "https://drive.google.com/file/d/1SROZ68MAursVT4ZzB84Ao_5LgO1FxRDM/view?usp=sharing",
    USA: "https://drive.google.com/file/d/1YU-Qda09LCbvDyssyxc1MqxDvoZZ0euE/view?usp=sharing",
  },
} as const

/**
 * Validates that a brochure URL matches the expected URL for a given country and program type
 * @param country - The country name
 * @param brochureType - Either "citizenship" or "residency"
 * @param providedUrl - The URL to validate
 * @returns boolean - True if the URL matches the expected URL
 */
export function validateBrochureUrl(
  country: string,
  brochureType: "citizenship" | "residency",
  providedUrl: string,
): boolean {
  const expectedUrl =
    brochureUrlMapping[brochureType][country as keyof (typeof brochureUrlMapping)[typeof brochureType]]

  if (!expectedUrl) {
    console.warn(`[v0] No brochure URL found for ${country} ${brochureType}`)
    return false
  }

  // Normalize URLs for comparison (remove trailing slashes, convert to lowercase)
  const normalizeUrl = (url: string) => url.trim().toLowerCase().replace(/\/$/, "")

  const isValid = normalizeUrl(expectedUrl) === normalizeUrl(providedUrl)

  if (!isValid) {
    console.error(`[v0] Brochure URL mismatch for ${country} ${brochureType}`)
    console.error(`[v0] Expected: ${expectedUrl}`)
    console.error(`[v0] Provided: ${providedUrl}`)
  }

  return isValid
}

/**
 * Gets the correct brochure URL for a country and program type
 * @param country - The country name
 * @param brochureType - Either "citizenship" or "residency"
 * @returns string | null - The brochure URL or null if not found
 */
export function getBrochureUrl(country: string, brochureType: "citizenship" | "residency"): string | null {
  return brochureUrlMapping[brochureType][country as keyof (typeof brochureUrlMapping)[typeof brochureType]] || null
}
