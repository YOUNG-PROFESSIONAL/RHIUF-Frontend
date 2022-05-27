export interface Bio{
  bioId: string ;
  bioTitle: string;
  bioCat:CategorieBio ;
  bioDesc: string;
  bioEnabled: boolean
}

export enum CategorieBio{
    OBJECTIF,
    MISSION,
    VISION,
    SLOGAN,
    SOATOAVINA
}
