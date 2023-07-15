export interface CatalogueState {
  defects: DefectType[],
  editingEntry: DefectType | null,
}

export type DefectType = {
  id: string,
  name: string,
  description: string,
  product: string
}