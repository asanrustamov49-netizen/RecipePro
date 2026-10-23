const SEPARATORS = /[,;\n]+/;

const normalize = (value: string) => value.trim().toLocaleLowerCase('ru-RU');

/** Разбирает ввод пользователя в список уникальных продуктов. */
export function parseIngredients(value: string): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const part of value.split(SEPARATORS)) {
    const item = part.trim().replace(/\s+/g, ' ');
    const key = normalize(item);
    if (!item || seen.has(key)) continue;
    seen.add(key);
    result.push(item);
  }
  return result;
}

export function hasIngredient(value: string, name: string): boolean {
  const key = normalize(name);
  return parseIngredients(value).some((item) => normalize(item) === key);
}

/** Добавляет продукт в строку ввода или убирает его, если он уже есть. */
export function toggleIngredient(value: string, name: string): string {
  const list = parseIngredients(value);
  const key = normalize(name);
  const index = list.findIndex((item) => normalize(item) === key);

  if (index >= 0) {
    list.splice(index, 1);
  } else {
    list.push(list.length ? name.toLocaleLowerCase('ru-RU') : name);
  }
  return list.join(', ');
}
