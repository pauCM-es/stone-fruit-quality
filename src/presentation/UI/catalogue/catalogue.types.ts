export interface CatalogueState {
  defects: DefectType[],
  editingEntry: DefectType | null,
}

export type DefectType = {
  id: string,
  title: string,
  description: string,
  fruits: string
  pictures: string[]
}