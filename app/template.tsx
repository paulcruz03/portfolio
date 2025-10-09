'use client';
import GradualBlur from '../components/GradualBlur';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <section style={{position: 'relative',overflow: 'hidden'}}>
      <div style={{ height: '100%',overflowY: 'auto' }}>
        {children}
      </div>

      <GradualBlur
        target="page"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={1}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  )
}