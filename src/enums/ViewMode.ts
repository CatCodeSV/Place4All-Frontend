export enum ViewMode {
  Create = 1,
  Edit = 2,
  Readonly = 3,
}

export function getRouterViewMode(mode: string | null): ViewMode {
  if (isNaN(Number(mode))) {
    return ViewMode.Readonly;
  }
  const parsedMode = Number(mode);
  switch (parsedMode) {
    case 2:
      return ViewMode.Edit;
    default:
      return ViewMode.Readonly;
  }
}
