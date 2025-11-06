
export enum AdType {
  ProductOnly = 'Product Only',
  WithMaleModel = 'With Male Model',
  WithFemaleModel = 'With Female Model',
}

export enum AdStyle {
  Instagram = 'Instagram Ad',
  StoreBanner = 'Store Banner',
  NaturalBackground = 'Natural Background',
}

export interface UploadedFile {
  base64: string;
  name: string;
  type: string;
}
