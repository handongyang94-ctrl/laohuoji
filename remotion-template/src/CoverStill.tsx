import React from 'react';
import {AbsoluteFill, Img, staticFile} from 'remotion';
import {brand, coverText} from './config';

const personAsset = 'assets/person-frame.jpg';
const commentAsset = 'assets/comment-screenshot.jpg';

export const CoverStill: React.FC = () => (
  <AbsoluteFill style={{background: '#f3f5f6', fontFamily: 'Microsoft YaHei, PingFang SC, Arial, sans-serif'}}>
    <Img
      src={staticFile(personAsset)}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        filter: 'contrast(1.05) saturate(1.02)',
      }}
    />
    <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.08), rgba(0,0,0,0.1) 44%, rgba(0,0,0,0.62))'}} />

    <div style={{position: 'absolute', left: 62, top: 62, display: 'flex', gap: 12}}>
      <div style={{background: brand.yellow, color: brand.ink, borderRadius: 999, padding: '12px 22px', fontSize: 25, fontWeight: 900}}>{coverText.eyebrow}</div>
      <div style={{background: 'rgba(255,255,255,0.94)', color: brand.ink, borderRadius: 999, padding: '12px 22px', fontSize: 25, fontWeight: 900}}>{coverText.topic}</div>
    </div>

    <div style={{position: 'absolute', left: 66, top: 150, width: 560, borderRadius: 28, padding: 18, background: 'rgba(255,255,255,0.92)', boxShadow: '0 24px 70px rgba(0,0,0,0.20)'}}>
      <Img src={staticFile(commentAsset)} style={{width: '100%', borderRadius: 20, display: 'block'}} />
    </div>

    <div style={{position: 'absolute', left: 64, right: 64, bottom: 76, borderRadius: 34, padding: '34px 40px 36px', background: brand.glass, border: '1px solid rgba(255,255,255,0.16)', boxShadow: '0 26px 80px rgba(0,0,0,0.32)'}}>
      <div style={{position: 'absolute', left: 0, top: 32, bottom: 32, width: 9, borderRadius: 999, background: brand.yellow}} />
      <div style={{fontSize: 31, color: brand.yellow, fontWeight: 900, marginBottom: 12}}>{coverText.kicker}</div>
      <div style={{fontSize: 82, lineHeight: 1.04, color: 'white', fontWeight: 950, letterSpacing: 0}}>{coverText.titleA}</div>
      <div style={{fontSize: 82, lineHeight: 1.04, color: 'white', fontWeight: 950, letterSpacing: 0}}>{coverText.titleB}</div>
      <div style={{display: 'flex', gap: 14, marginTop: 24}}>
        {coverText.chips.map((chip) => (
          <div key={chip} style={{background: 'rgba(255,255,255,0.12)', color: 'white', borderRadius: 999, padding: '10px 18px', fontSize: 24, fontWeight: 800}}>{chip}</div>
        ))}
      </div>
    </div>
  </AbsoluteFill>
);

