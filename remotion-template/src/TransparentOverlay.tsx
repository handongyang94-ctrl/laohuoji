import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {brand, overlayCards} from './config';

const cardStyle: React.CSSProperties = {
  width: 650,
  borderRadius: 28,
  padding: '26px 32px',
  background: brand.glass,
  border: '1px solid rgba(255,255,255,0.18)',
  boxShadow: '0 22px 70px rgba(0,0,0,0.24)',
  color: 'white',
  fontFamily: 'Microsoft YaHei, PingFang SC, Arial, sans-serif',
};

const Card: React.FC<{
  start: number;
  end: number;
  kicker: string;
  title: string;
  body: string;
  y: number;
  accent?: string;
}> = ({start, end, kicker, title, body, y, accent = brand.yellow}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const enter = spring({frame: frame - start, fps, config: {damping: 18, stiffness: 120}});
  const exit = interpolate(frame, [end - 18, end], [1, 0], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});
  const opacity = enter * exit;
  const x = interpolate(enter, [0, 1], [-36, 0]);

  if (frame < start || frame > end) return null;

  return (
    <div style={{position: 'absolute', left: 72 + x, top: y, opacity, ...cardStyle}}>
      <div style={{position: 'absolute', left: 0, top: 24, bottom: 24, width: 8, borderRadius: 99, background: accent}} />
      <div style={{fontSize: 26, color: accent, fontWeight: 800, marginBottom: 8}}>{kicker}</div>
      <div style={{fontSize: 44, lineHeight: 1.12, fontWeight: 900}}>{title}</div>
      <div style={{fontSize: 26, lineHeight: 1.35, opacity: 0.9, marginTop: 12}}>{body}</div>
    </div>
  );
};

export const TransparentOverlay: React.FC = () => {
  const frame = useCurrentFrame();
  const progress = interpolate(frame, [0, 2400], [0, 1], {extrapolateLeft: 'clamp', extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill style={{background: 'transparent'}}>
      <div style={{position: 'absolute', left: 72, top: 54, display: 'flex', gap: 14, fontFamily: 'Microsoft YaHei, Arial'}}>
        <div style={{background: brand.yellow, color: brand.ink, borderRadius: 999, padding: '12px 22px', fontSize: 24, fontWeight: 900}}>评论区提问</div>
        <div style={{background: 'rgba(255,255,255,0.92)', color: brand.ink, borderRadius: 999, padding: '12px 24px', fontSize: 24, fontWeight: 900}}>内容怎么拍？</div>
      </div>

      {overlayCards.map((card, index) => (
        <Card key={card.title} {...card} y={190 + index * 210} accent={index === 1 ? brand.orange : brand.yellow} />
      ))}

      <div style={{position: 'absolute', left: 72, right: 72, bottom: 42, height: 10, borderRadius: 999, background: 'rgba(255,255,255,0.22)', overflow: 'hidden'}}>
        <div style={{width: `${progress * 100}%`, height: '100%', background: brand.yellow}} />
      </div>
    </AbsoluteFill>
  );
};

