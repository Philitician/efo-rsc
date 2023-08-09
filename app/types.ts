export interface EfoProduktRespons {
  Liste: EfoProduktdata[];
  Sideinfo: SideInfo;
}

export interface EfoProduktdata {
  Produktnr: number;
  Varenavn: string;
  Feltverdier: FeltVerdi[];
  Produkteier: Produkteier;
}

export interface FeltVerdi {
  Felt: string;
  Visningsnavn: string;
  Guide: string;
  Verdi: string | string[] | number[];
  Verditekst?: string;
  Maleenhet?: string;
}

interface Produkteier {
  Navn: string;
}

export interface SideInfo {
  Side: number;
  AntallSider: number;
  AntallPerSide: number;
  AntallTotalt: number;
}
