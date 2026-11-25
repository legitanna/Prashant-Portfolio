type Props = { className?: string };

const ink = '#14161a';
const accent = '#24405e';
const rule = '#c9c2b6';
const faint = '#e2ddd4';
const muted = '#7d828a';

const label = {
  fill: muted,
  fontSize: '10',
  letterSpacing: '1.6',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

const small = {
  fill: '#9a9ea5',
  fontSize: '9',
  fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
};

export function PipelineDiagram({ className }: Props) {
  return (
    <svg
      viewBox="0 0 720 150"
      role="img"
      aria-label="Flow management and inventory feed a single reporting layer"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* FMS */}
      <text x="4" y="12" {...label}>
        FMS
      </text>
      <rect x="4" y="24" width="196" height="92" stroke={ink} strokeWidth="1.2" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={20 + i * 44}
          y="58"
          width="32"
          height="20"
          stroke={i === 2 ? accent : rule}
          strokeWidth={i === 2 ? 1.6 : 1}
        />
      ))}
      {[0, 1, 2].map((i) => (
        <line key={i} x1={52 + i * 44} y1="68" x2={64 + i * 44} y2="68" stroke={rule} strokeWidth="1" />
      ))}
      <line x1="103" y1="52" x2="103" y2="42" stroke={accent} strokeWidth="1" />
      <text x="108" y="44" {...small}>
        9d in dyeing
      </text>
      <text x="20" y="98" {...small} className="diagram-note">
        stage · owner · ageing
      </text>

      <line x1="208" y1="70" x2="240" y2="70" stroke={rule} strokeWidth="1" />
      <path d="M235 65l6 5-6 5" stroke={rule} strokeWidth="1" />

      {/* IMS */}
      <text x="248" y="12" {...label}>
        IMS
      </text>
      <rect x="248" y="24" width="196" height="92" stroke={ink} strokeWidth="1.2" />
      <line x1="262" y1="94" x2="430" y2="94" stroke={faint} strokeWidth="1" />
      {[34, 48, 26, 56, 40, 62].map((h, i) => (
        <rect
          key={i}
          x={266 + i * 26}
          y={94 - h}
          width="16"
          height={h}
          stroke={i === 5 ? accent : rule}
          strokeWidth={i === 5 ? 1.6 : 1}
        />
      ))}
      <line x1="262" y1="44" x2="430" y2="44" stroke={accent} strokeWidth="1" strokeDasharray="4 4" opacity="0.55" />
      <text x="262" y="104" {...small} className="diagram-note">
        inward · outward · reorder
      </text>

      <line x1="452" y1="70" x2="484" y2="70" stroke={rule} strokeWidth="1" />
      <path d="M479 65l6 5-6 5" stroke={rule} strokeWidth="1" />

      {/* Reporting */}
      <text x="492" y="12" {...label}>
        REPORTING
      </text>
      <rect x="492" y="24" width="224" height="92" stroke={ink} strokeWidth="1.2" />
      {[0, 1, 2].map((i) => (
        <rect key={i} x="510" y={48 + i * 14} width="74" height="9" stroke={faint} strokeWidth="1" />
      ))}
      <rect x="600" y="44" width="98" height="52" stroke={accent} strokeWidth="1.6" />
      <path d="M610 84l16-18 12 10 14-20 14 22" stroke={accent} strokeWidth="1.3" />
      <text x="510" y="106" {...small} className="diagram-note">
        one source · one number
      </text>
    </svg>
  );
}

export function ValueChainDiagram({ className }: Props) {
  const nodes = [
    { x: 6, w: 122, term: 'Enquiry' },
    { x: 156, w: 122, term: 'Order' },
    { x: 306, w: 122, term: 'Material' },
    { x: 456, w: 122, term: 'Work' },
    { x: 606, w: 108, term: 'Report' },
  ];

  const subs = ['terms, credit', 'FMS', 'IMS', 'flows, checks', 'MIS, BI'];

  return (
    <svg
      viewBox="0 0 720 120"
      role="img"
      aria-label="The chain from enquiry to report, and which system covers each step"
      className={className}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {nodes.map((n, i) => (
        <g key={n.term}>
          <rect
            x={n.x}
            y="40"
            width={n.w}
            height="44"
            stroke={i === 0 || i === 4 ? accent : ink}
            strokeWidth={i === 0 || i === 4 ? 1.5 : 1.1}
          />
          <text
            x={n.x + 12}
            y="59"
            fill={ink}
            fontSize="11"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
          >
            {n.term}
          </text>
          <text x={n.x + 12} y="74" {...small} fontSize="8.5" className="diagram-note">
            {subs[i]}
          </text>
          {i < nodes.length - 1 && (
            <g>
              <line
                x1={n.x + n.w}
                y1="62"
                x2={nodes[i + 1].x - 10}
                y2="62"
                stroke={rule}
                strokeWidth="1"
              />
              <path
                d={`M${nodes[i + 1].x - 15} 58l5 4-5 4`}
                stroke={rule}
                strokeWidth="1"
              />
            </g>
          )}
        </g>
      ))}
    </svg>
  );
}

export function Figure({ children, caption }: { children: React.ReactNode; caption: string }) {
  return (
    <figure>
      {children}
      <figcaption className="mt-5 max-w-[70ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-[#8a8f97]">
        {caption}
      </figcaption>
    </figure>
  );
}
