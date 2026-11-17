import { Customer } from '../models/customer.model';

export const PERFIL_PIRI_PIRI = 'Pollo Piri Piri Lovers';
export const PERFIL_POLLO_HIERBAS = 'Pollo con Hierbas Lovers';

export function obtenerPerfil(name?: string | null) {
  if (!name) return PERFIL_PIRI_PIRI;

  const nombreEnMinusculas = name.toLowerCase();
  return nombreEnMinusculas.includes('b') || nombreEnMinusculas.includes('h')
    ? PERFIL_POLLO_HIERBAS
    : PERFIL_PIRI_PIRI;
}

export function ordenarClientes(customers: Customer[], sortBy: keyof Customer) {
  const copy = [...customers];

  return copy.sort((a, b) => {
    const valorA = a[sortBy];
    const valorB = b[sortBy];

    if (typeof valorA === 'number' && typeof valorB === 'number') {
      return valorA - valorB;
    }

    return String(valorA).localeCompare(String(valorB));
  });
}
