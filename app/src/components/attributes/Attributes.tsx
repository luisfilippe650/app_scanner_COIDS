import React from 'react';
import AttrRow from './AttrRow';
import SectionCard from './SectionCard';
import { BadgeVariant } from './Badge';

export interface AttributeItem {
  label: string;
  value?: string | null;
  mono?: boolean;
  badge?: { label: string; variant: BadgeVariant };
}

interface AttributesProps {
  data?: AttributeItem[];
}

function Attributes({ data = [
  { label: "Tipo", badge: { label: 'Server', variant: 'blue' as BadgeVariant } },
  { label: "Nome comum", value: "srv-prod-01" },
  { label: "Rótulo visível", value: "Production Server 01" },
  { label: "Asset tag", value: "TAG-00127", mono: true },
  { label: "Container", value: null },
  { label: "Com problemas", badge: { label: 'Não', variant: 'green' as BadgeVariant } },
] }: AttributesProps) {
    return (
        <SectionCard icon="🏷️" title="Atributos">
            {data.map((item, idx) => (
              <AttrRow 
                key={idx}
                label={item.label} 
                value={item.value}
                mono={item.mono}
                badge={item.badge}
              />
            ))}
        </SectionCard>
    );
}

export default Attributes;