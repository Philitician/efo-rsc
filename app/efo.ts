import { type EfoProduktRespons } from "./types";

const PRODUCT_LIST_ENDPOINT = "1.2/Produktdata/Liste";

// a function that creates a string of search params for the efo api
export const buildEfoQueryString = (
  side: number,
  sideStr: number,
  oppdatertEtter?: string | null
) => {
  const searchParams = new URLSearchParams({
    side: side.toString(),
    sideStr: sideStr.toString(),
    alleFelter: "true",
    ...(oppdatertEtter && { oppdatertEtter }),
  });
  return searchParams.toString();
};

const efoHeaders = {
  Authorization: `Basic ${process.env.EFO_AUTH_ENCODED}`,
};

export const getEfoProductList = async (searchParams: string) => {
  const url = `${process.env.NEXT_PUBLIC_EFO_BASE_URL}/${PRODUCT_LIST_ENDPOINT}?${searchParams}`;
  const res = await fetch(url, {
    headers: efoHeaders,
  });
  return res.json() as Promise<EfoProduktRespons>;
};
