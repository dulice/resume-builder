export class FormValue {
  id: number = 0;
  label?: string = "";
  icon?: JSX.Element | undefined;
  value: string = "";

  constructor(initializer?: any) {
    if (!initializer) return;
    if (initializer.id) this.id = initializer.id;
    if (initializer.value) this.value = initializer.value;
    if (initializer.icon) this.icon = initializer.icon;
    if (initializer.label) this.label = initializer.label;
  }
}
