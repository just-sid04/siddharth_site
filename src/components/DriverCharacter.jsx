import { motion, AnimatePresence } from 'framer-motion';

/* ─── DRIVER SILHOUETTE — realistic from behind, seated ─────────── */

export default function DriverCharacter({ phase }) {
  const isDriving = phase === 'driving';
  const isStopped = phase === 'stopped';

  return (
    <div className={isDriving ? 'driver-bob' : ''}
      style={{width:'100%',height:'100%',display:'flex',alignItems:'flex-end',justifyContent:'center'}}>
      <svg viewBox="0 80 400 500" style={{width:'100%',height:'100%'}} xmlns="http://www.w3.org/2000/svg">

        {/* SEAT BACK */}
        <rect x={105} y={290} width={190} height={240} rx={16} fill="#111118"/>
        <rect x={115} y={278} width={170} height={30}  rx={12} fill="#0a0a10"/>
        {/* Seat headrest padding */}
        <rect x={140} y={252} width={120} height={42} rx={14} fill="#111118"/>
        <rect x={148} y={258} width={104} height={30} rx={10} fill="#1a1a22"/>

        {/* NECK */}
        <rect x={188} y={218} width={24} height={38} rx={6} fill="#b07848"/>
        {/* Collar */}
        <path d="M165 234 L188 218 L212 218 L235 234 Q215 244 200 242 Q185 244 165 234Z" fill="#1a2040"/>

        {/* HEAD — realistic oval, back view */}
        <ellipse cx={200} cy={190} rx={50} ry={54} fill="#c08858"/>

        {/* HAIR — short dark, natural back-of-head */}
        <path d="M152 178 Q156 122 200 115 Q244 122 248 178 Q238 148 200 143 Q162 148 152 178Z" fill="#0f0c0a"/>
        {/* Hair sides fade */}
        <path d="M152 178 Q149 196 156 212 L160 188 Q155 172 152 178Z" fill="#0f0c0a"/>
        <path d="M248 178 Q251 196 244 212 L240 188 Q245 172 248 178Z" fill="#0f0c0a"/>
        {/* Hair texture */}
        <path d="M162 160 Q180 144 200 141 Q220 144 238 160 Q222 152 200 149 Q178 152 162 160Z" fill="#060404" opacity={0.5}/>

        {/* EAR LEFT */}
        <ellipse cx={152} cy={196} rx={9} ry={13} fill="#a87040"/>
        <ellipse cx={154} cy={196} rx={5} ry={8}  fill="#b07848"/>
        {/* EAR RIGHT */}
        <ellipse cx={248} cy={196} rx={9} ry={13} fill="#a87040"/>
        <ellipse cx={246} cy={196} rx={5} ry={8}  fill="#b07848"/>

        {/* JACKET — dark navy, detailed */}
        <path d="M103 292 Q110 262 142 244 L176 228 L224 228 L258 244 Q290 262 297 292Z" fill="#0d1e42"/>
        <rect x={103} y={292} width={194} height={140} fill="#0d1e42" rx={4}/>
        {/* Center back seam shadow */}
        <line x1={200} y1={255} x2={200} y2={430} stroke="#081428" strokeWidth={3}/>
        {/* Shoulder highlights */}
        <path d="M105 295 Q130 268 160 258" stroke="#182c5a" strokeWidth={6} fill="none" strokeLinecap="round"/>
        <path d="M295 295 Q270 268 240 258" stroke="#182c5a" strokeWidth={6} fill="none" strokeLinecap="round"/>
        {/* Reflective safety strips */}
        <rect x={125} y={315} width={150} height={8} rx={4} fill="#8090b0" opacity={0.3}/>
        <rect x={125} y={340} width={150} height={8} rx={4} fill="#8090b0" opacity={0.25}/>

        {/* ARMS toward wheel */}
        {/* LEFT ARM */}
        <path d="M112 296 Q80 328 58 368" stroke="#0d1e42" strokeWidth={32} fill="none" strokeLinecap="round"/>
        <path d="M58 368 Q48 388 44 414" stroke="#0a1830" strokeWidth={26} fill="none" strokeLinecap="round"/>
        {/* LEFT HAND */}
        <ellipse cx={42} cy={420} rx={16} ry={12} fill="#c08858"/>
        <path d="M34 414 Q30 402 38 397 Q46 393 50 405Z" fill="#a87040"/>
        <path d="M26 420 Q22 408 30 403 Q38 399 41 412Z" fill="#a87040"/>

        {/* RIGHT ARM */}
        <path d="M288 296 Q320 328 342 368" stroke="#0d1e42" strokeWidth={32} fill="none" strokeLinecap="round"/>
        <path d="M342 368 Q352 388 356 414" stroke="#0a1830" strokeWidth={26} fill="none" strokeLinecap="round"/>
        {/* RIGHT HAND */}
        <ellipse cx={358} cy={420} rx={16} ry={12} fill="#c08858"/>
        <path d="M366 414 Q370 402 362 397 Q354 393 350 405Z" fill="#a87040"/>
        <path d="M374 420 Q378 408 370 403 Q362 399 359 412Z" fill="#a87040"/>

        {/* STEERING WHEEL */}
        <circle cx={200} cy={460} r={90} fill="none" stroke="#080810" strokeWidth={22}/>
        <circle cx={200} cy={460} r={90} fill="none" stroke="#141420" strokeWidth={16}/>
        {/* Grip wrap detail */}
        <circle cx={200} cy={460} r={90} fill="none" stroke="#0a0a18" strokeWidth={5} strokeDasharray="14 20" strokeDashoffset={isDriving?'0':'7'}/>
        {/* Hub */}
        <circle cx={200} cy={460} r={24} fill="#0a0a14"/>
        <circle cx={200} cy={460} r={18} fill="#181824"/>
        <circle cx={200} cy={460} r={10} fill="#222230"/>
        {/* Spokes */}
        <line x1={200} y1={370} x2={200} y2={436} stroke="#080810" strokeWidth={16}/>
        <line x1={200} y1={484} x2={200} y2={550} stroke="#080810" strokeWidth={16}/>
        <line x1={110} y1={460} x2={176} y2={460} stroke="#080810" strokeWidth={16}/>
        <line x1={224} y1={460} x2={290} y2={460} stroke="#080810" strokeWidth={16}/>

        {/* TALKING — raised hand when stopped */}
        <AnimatePresence>
          {isStopped && (
            <motion.g key="wave"
              initial={{opacity:0,x:-8}} animate={{opacity:1,x:0}} exit={{opacity:0}}>
              {/* Right arm raised instead */}
              <path d="M288 285 Q338 248 365 210" stroke="#0d1e42" strokeWidth={30} fill="none" strokeLinecap="round"/>
              <circle cx={368} cy={206} r={18} fill="#c08858"/>
              {/* Fingers */}
              <rect x={358} y={183} width={11} height={26} rx={5} fill="#c08858"/>
              <rect x={372} y={179} width={10} height={28} rx={5} fill="#c08858"/>
              <rect x={384} y={185} width={9}  height={24} rx={5} fill="#c08858"/>
            </motion.g>
          )}
        </AnimatePresence>

      </svg>
    </div>
  );
}
