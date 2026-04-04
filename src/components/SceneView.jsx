import { AnimatePresence, motion } from 'framer-motion';

/* ─── SCENE PALETTES per stop ─────────────────────────────────── */
const PAL = [
  { skyA:'#c8dce8',skyB:'#ddeaf0',skyC:'#eef5f8', fog:'rgba(220,235,242,0.7)', road:'#4a5a4a', midLine:'rgba(255,255,255,0.8)', ground:'#3a5030', treeD:'#1a3a18', treeM:'#235a20', treeN:'#2a6826', tint:'rgba(200,220,210,0.06)' },
  { skyA:'#b8ccd8',skyB:'#ccdde8',skyC:'#e0eef5', fog:'rgba(200,220,232,0.65)', road:'#4a5040', midLine:'rgba(255,255,255,0.8)', ground:'#3a4a28', treeD:'#183518', treeM:'#205020', treeN:'#286025', tint:'rgba(190,210,200,0.06)' },
  { skyA:'#888da0',skyB:'#a0a8b8',skyC:'#c0c8d4', fog:'rgba(180,190,210,0.6)',  road:'#383840', midLine:'rgba(255,255,220,0.7)', ground:'#282830', treeD:'#1a1a28', treeM:'#282835', treeN:'#302838', tint:'rgba(150,160,190,0.08)' },
  { skyA:'#606878',skyB:'#7880a0',skyC:'#9098b8', fog:'rgba(160,170,200,0.65)', road:'#303038', midLine:'rgba(255,255,180,0.75)',ground:'#222230', treeD:'#181828', treeM:'#202030', treeN:'#282840', tint:'rgba(140,150,180,0.10)' },
  { skyA:'#c05820',skyB:'#e08840',skyC:'#f8c060', fog:'rgba(250,200,100,0.5)',  road:'#3a3028', midLine:'rgba(255,240,150,0.8)', ground:'#2a2818', treeD:'#3a2814', treeM:'#4a3818', treeN:'#362010', tint:'rgba(220,150,60,0.07)' },
  { skyA:'#6830a0',skyB:'#c03858',skyC:'#f06030', fog:'rgba(240,140,80,0.55)', road:'#282030', midLine:'rgba(255,220,150,0.8)', ground:'#1a1820', treeD:'#280818', treeM:'#380a20', treeN:'#200818', tint:'rgba(200,80,50,0.08)' },
];

/* ─── TREE SVG shapes ─────────────────────────────────────────── */
function TreeFar({ x, h = 50, p }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x={-4} y={h*0.55} width={8} height={h*0.45} fill={p.treeD} rx={2}/>
      <ellipse cx={0} cy={h*0.45} rx={h*0.28} ry={h*0.38} fill={p.treeD}/>
      <ellipse cx={0} cy={h*0.3}  rx={h*0.20} ry={h*0.28} fill={p.treeM}/>
    </g>
  );
}
function TreeMid({ x, h = 130, p }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x={-6} y={h*0.58} width={12} height={h*0.42} fill={p.treeD} rx={3}/>
      <ellipse cx={0} cy={h*0.52} rx={h*0.30} ry={h*0.38} fill={p.treeD}/>
      <ellipse cx={0} cy={h*0.36} rx={h*0.25} ry={h*0.32} fill={p.treeM}/>
      <ellipse cx={0} cy={h*0.20} rx={h*0.18} ry={h*0.24} fill={p.treeN}/>
    </g>
  );
}
function TreeNear({ x, h = 320, p }) {
  return (
    <g transform={`translate(${x},0)`}>
      <rect x={-12} y={h*0.60} width={24} height={h*0.40} fill={p.treeD} rx={5}/>
      {/* Shadow */}
      <ellipse cx={0} cy={h*0.98} rx={h*0.15} ry={h*0.04} fill="rgba(0,0,0,0.25)"/>
      <ellipse cx={0} cy={h*0.55} rx={h*0.34} ry={h*0.40} fill={p.treeD}/>
      <ellipse cx={-h*0.06} cy={h*0.38} rx={h*0.28} ry={h*0.34} fill={p.treeM}/>
      <ellipse cx={h*0.04}  cy={h*0.24} rx={h*0.22} ry={h*0.28} fill={p.treeN}/>
      <ellipse cx={0}       cy={h*0.12} rx={h*0.16} ry={h*0.18} fill={p.treeN}/>
    </g>
  );
}

/* ─── TREE STRIPS (seamless looping SVG) ─────────────────────── */
function FarTreeStrip({ p }) {
  const positions = [50,130,210,290,370,450,530,610,690,770,850,930];
  const W = 980;
  return (
    <>
      {[0,1].map(copy => (
        <svg key={copy} viewBox={`0 0 ${W} 120`}
          style={{width:W,height:'100%',display:'block',flexShrink:0}}>
          {positions.map((x,i) => <TreeFar key={i} x={x} h={50+((i*17)%30)} p={p}/>)}
        </svg>
      ))}
    </>
  );
}
function MidTreeStrip({ p }) {
  const positions = [60,175,295,415,535,655,775,895,1015];
  const W = 1080;
  return (
    <>
      {[0,1].map(copy => (
        <svg key={copy} viewBox={`0 0 ${W} 200`}
          style={{width:W,height:'100%',display:'block',flexShrink:0}}>
          {positions.map((x,i) => <TreeMid key={i} x={x} h={110+((i*23)%50)} p={p}/>)}
        </svg>
      ))}
    </>
  );
}
function NearTreeStrip({ p }) {
  const positions = [80,260,440,620,800,980];
  const W = 1080;
  return (
    <>
      {[0,1].map(copy => (
        <svg key={copy} viewBox={`0 0 ${W} 420`}
          style={{width:W,height:'100%',display:'block',flexShrink:0}}>
          {positions.map((x,i) => <TreeNear key={i} x={x} h={280+((i*31)%100)} p={p}/>)}
        </svg>
      ))}
    </>
  );
}

/* ─── ROAD CENTER DASHES ─────────────────────────────────────── */
function RoadDashes({ moving }) {
  return (
    <div style={{position:'absolute',inset:0,pointerEvents:'none'}}>
      {Array.from({length:12}).map((_,i) => (
        <div key={i} className={`road-dash${moving?'':' paused'}`}
          style={{animationDelay:`${-i*0.22}s`}}/>
      ))}
    </div>
  );
}

/* ─── BUS STOP SIGN ──────────────────────────────────────────── */
function StopSign() {
  return (
    <motion.div
      initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}}
      exit={{y:-100,opacity:0}}
      transition={{type:'spring',bounce:0.5,duration:0.7}}
      style={{position:'absolute',left:'8%',top:'18%',zIndex:20,display:'flex',flexDirection:'column',alignItems:'center'}}
    >
      <div style={{background:'#FCD34D',border:'3px solid #92400E',borderRadius:'8px',padding:'5px 14px',fontSize:'clamp(9px,1.1vw,12px)',fontWeight:900,fontFamily:'Nunito,sans-serif',color:'#1C1210',boxShadow:'0 4px 20px rgba(0,0,0,0.5)',letterSpacing:'1.5px'}}>
        🚌 BUS STOP
      </div>
      <div style={{width:'4px',height:'64px',background:'#78716C',borderRadius:'2px'}}/>
    </motion.div>
  );
}

/* ─── MAIN SCENE ─────────────────────────────────────────────── */
export default function SceneView({ stopIndex, phase }) {
  const p = PAL[Math.min(stopIndex, PAL.length-1)];
  const moving  = phase==='driving'||phase==='arriving';
  const slow    = phase==='arriving';

  const farDur  = slow?'90s':moving?'28s':'9999s';
  const midDur  = slow?'40s':moving?'11s':'9999s';
  const nearDur = slow?'18s':moving?'4.5s':'9999s';

  /* sky */
  const sky = `linear-gradient(180deg, ${p.skyA} 0%, ${p.skyB} 55%, ${p.skyC} 100%)`;

  return (
    <div style={{position:'absolute',inset:0,overflow:'hidden'}}>

      {/* SKY */}
      <div style={{position:'absolute',inset:0,background:sky}}/>

      {/* HORIZON FOG */}
      <div style={{position:'absolute',top:'40%',left:0,right:0,height:'22%',
        background:`linear-gradient(180deg, transparent, ${p.fog}, transparent)`,
        pointerEvents:'none'}}/>

      {/* GROUND */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'46%',
        background:p.ground,clipPath:'polygon(0 30%,100% 30%,100% 100%,0 100%)'}}/>

      {/* FAR TREE LAYER */}
      <div style={{position:'absolute',bottom:'43%',left:0,right:0,height:'16%',overflow:'hidden'}}>
        <div style={{display:'flex',height:'100%',animation:`sceneScroll ${farDur} linear infinite`}}>
          <FarTreeStrip p={p}/>
        </div>
      </div>

      {/* MID TREE LAYER — LEFT side of road */}
      <div style={{position:'absolute',bottom:'36%',left:0,width:'44%',height:'28%',overflow:'hidden'}}>
        <div style={{display:'flex',height:'100%',animation:`sceneScroll ${midDur} linear infinite`}}>
          <MidTreeStrip p={p}/>
        </div>
      </div>
      {/* MID TREE LAYER — RIGHT side (mirrored) */}
      <div style={{position:'absolute',bottom:'36%',right:0,width:'44%',height:'28%',overflow:'hidden',transform:'scaleX(-1)'}}>
        <div style={{display:'flex',height:'100%',animation:`sceneScroll ${midDur} linear infinite`,animationDelay:'-5.5s'}}>
          <MidTreeStrip p={p}/>
        </div>
      </div>

      {/* ROAD SURFACE */}
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'48%'}}>
        {/* Road polygon */}
        <div style={{
          position:'absolute',bottom:0,left:'50%',transform:'translateX(-50%)',
          width:'100%',height:'100%',
          background:`linear-gradient(180deg, ${p.road}cc 0%, ${p.road} 40%)`,
          clipPath:'polygon(32% 0%,68% 0%,100% 100%,0% 100%)',
        }}/>
        {/* Left road shoulder */}
        <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100%',
          background:'rgba(240,220,140,0.55)',
          clipPath:'polygon(31% 0%,32.5% 0%,2% 100%,0% 100%)',pointerEvents:'none'}}/>
        {/* Right road shoulder */}
        <div style={{position:'absolute',bottom:0,left:0,width:'100%',height:'100%',
          background:'rgba(240,220,140,0.55)',
          clipPath:'polygon(67.5% 0%,69% 0%,100% 100%,98% 100%)',pointerEvents:'none'}}/>
        {/* Center dashes */}
        <div style={{position:'absolute',inset:0,clipPath:'polygon(32% 0%,68% 0%,100% 100%,0% 100%)'}}>
          <RoadDashes moving={moving}/>
        </div>
      </div>

      {/* NEAR TREE LAYER (sides, large, fast) — LEFT */}
      <div style={{position:'absolute',bottom:'28%',left:'-2%',width:'36%',height:'60%',overflow:'hidden'}}>
        <div style={{display:'flex',height:'100%',animation:`sceneScroll ${nearDur} linear infinite`}}>
          <NearTreeStrip p={p}/>
        </div>
      </div>
      {/* NEAR TREE LAYER — RIGHT (mirrored) */}
      <div style={{position:'absolute',bottom:'28%',right:'-2%',width:'36%',height:'60%',overflow:'hidden',transform:'scaleX(-1)'}}>
        <div style={{display:'flex',height:'100%',animation:`sceneScroll ${nearDur} linear infinite`,animationDelay:'-2.2s'}}>
          <NearTreeStrip p={p}/>
        </div>
      </div>

      {/* Glass tint + visor shade */}
      <div style={{position:'absolute',top:0,left:0,right:0,height:'28%',
        background:'linear-gradient(180deg,rgba(0,0,0,0.25) 0%,transparent 100%)',
        pointerEvents:'none'}}/>
      <div style={{position:'absolute',bottom:0,left:0,right:0,height:'8%',
        background:'linear-gradient(0deg,rgba(0,0,0,0.4) 0%,transparent 100%)',
        pointerEvents:'none'}}/>
      {/* Glass surface sheen */}
      <div style={{position:'absolute',inset:0,pointerEvents:'none',
        background:'linear-gradient(130deg,rgba(255,255,255,0.04) 0%,transparent 55%,rgba(255,255,255,0.02) 100%)',
        mixBlendMode:'screen'}}/>

      {/* Tint overlay (color grading per stop) */}
      <div style={{position:'absolute',inset:0,background:p.tint,pointerEvents:'none',mixBlendMode:'overlay'}}/>

      {/* BUS STOP sign */}
      <AnimatePresence>
        {(phase==='arriving'||phase==='stopped') && <StopSign key="sign"/>}
      </AnimatePresence>
    </div>
  );
}
