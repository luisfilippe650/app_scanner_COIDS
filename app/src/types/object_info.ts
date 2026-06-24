/**
 * Tipos e interfaces para dados do RackTables/ObjectInfo
 */

export type UserRole = 'visitor' | 'admin';
export type FieldType = 'string' | 'float' | 'integer' | 'date' | 'custom' | 'select';
export type EditableFieldName = 'hw_type' | 'sw_type'; // Campos que NÃO podem ser editados

/**
 * Atributo específico do RackTables
 */
export interface SpecificAttributeData {
  name: string;
  label: string;
  value: string | number | null;
  type: FieldType;
  editable: boolean; // Se pode ser editado (false para hw_type, sw_type)
  options?: string[]; // Para campos do tipo 'select'
}

/**
 * Atributos base (vistos por todos)
 */
export interface BaseAttributes {
  type: string; // Ex: "Server", "Switch"
  common_name: string;
  visible_label: string;
  asset_tag: string;
  has_problem: boolean;
}

/**
 * Comentário/nota
 */
export interface Comment {
  id: string;
  author: string;
  timestamp: string; // ISO 8601
  text: string;
  visibility: 'public' | 'admin_only'; // Visitante vê only public
}

/**
 * Resposta da API RackTables - dados do objeto
 */
export interface ObjectInfoData {
  id: number;
  name: string;
  
  // Atributos base
  base: BaseAttributes;
  
  // Atributos específicos (dinâmicos, vêm do RackTables)
  specific_attributes: SpecificAttributeData[];
  
  // Comentários/notas
  comments: Comment[];
  
  // Metadados
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
}

/**
 * Estado local de edição
 */
export interface EditState {
  specific_attributes: Record<string, string | number | null>; // name -> edited value
  comments_text: string;
  is_modified: boolean;
}

/**
 * Props comuns para componentes object_info
 */
export interface ObjectInfoViewProps {
  data: ObjectInfoData;
  role: UserRole; // 'visitor' | 'admin'
  editMode?: boolean;
  onEdit?: (state: EditState) => Promise<void>;
  onCancel?: () => void;
}
