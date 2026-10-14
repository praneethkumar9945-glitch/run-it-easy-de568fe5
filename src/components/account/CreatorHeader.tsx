import type { ReactNode } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CreatorHeader({ title, subtitle, busy, onBack, children }: { title: string; subtitle: string; busy: boolean; onBack: () => void; children: ReactNode }) {
  return <header className="social-composer-header">
    <Button type="button" variant="ghost" size="icon" aria-label="Back" disabled={busy} onClick={onBack}><ArrowLeft /></Button>
    <div className="text-center"><h2 className="text-base font-semibold">{title}</h2><p className="text-xs text-muted-foreground">{subtitle}</p></div>
    {children}
  </header>;
}