/**
 * Permissões por role
 */

import { UserRole, SpecificAttributeData } from './object_info';

export const PERMISSIONS = {
  visitor: {
    canViewBaseAttributes: true,
    canViewSpecificAttributes: true,
    canViewPublicComments: true,
    canEditAttributes: false,
    canEditComments: false,
    canViewAdminComments: false,
  },
  admin: {
    canViewBaseAttributes: true,
    canViewSpecificAttributes: true,
    canViewPublicComments: true,
    canViewAdminComments: true,
    canEditAttributes: true,
    canEditComments: true,
  },
};

/**
 * Campos que NUNCA podem ser editados
 */
export const READ_ONLY_FIELDS = ['hw_type', 'sw_type'];

/**
 * Verifica se um campo pode ser editado por um role
 */
export function canEditField(fieldName: string, role: UserRole): boolean {
  if (READ_ONLY_FIELDS.includes(fieldName)) {
    return false; // Nunca pode ser editado
  }
  
  return role === 'admin';
}

/**
 * Filtra atributos específicos baseado em role
 */
export function filterSpecificAttributes(
  attributes: SpecificAttributeData[],
  role: UserRole
): SpecificAttributeData[] {
  // No futuro, adicione lógica de visibilidade por role se necessário
  return attributes;
}
