'use client';

import React, { useEffect, useMemo, useRef } from 'react';
import './InfiniteSpiral.css';

export interface SpiralItem {
  id?: string;
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  type?: string;
  description?: string;
  href?: string;
  target?: string;
  label?: string;
  onClick?: () => void;
  [key: string]: any;
}

export interface InfiniteSpiralProps {
  items: (string | SpiralItem)[];
  speed?: number;
  direction?: 'up' | 'down';
  animationMode?: 'auto' | 'drag' | 'scroll' | 'all';
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardsPerTurn?: number;
  rotation?: number;
  cardTilt?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeFade?: number;
  edgeBlur?: number;
  pauseOnHover?: boolean;
  imageFit?: 'cover' | 'contain';
  grayscale?: number;
  className?: string;
  onItemClick?: (item: SpiralItem, index: number) => void;
}

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
const modulo = (value: number, divisor: number) => ((value % divisor) + divisor) % divisor;
const smoothstep = (min: number, max: number, value: number) => {
  const x = clamp((value - min) / (max - min || 1), 0, 1);
  return x * x * (3 - 2 * x);
};

export const InfiniteSpiral: React.FC<InfiniteSpiralProps> = ({
  items = [],
  speed = 0.55,
  direction = 'up',
  animationMode = 'all',
  radius = 260,
  cardWidth = 240,
  cardHeight = 160,
  verticalSpacing = 85,
  perspective = 900,
  cardsPerTurn = 10,
  rotation = 0,
  cardTilt = 0,
  cardRadius = 16,
  centerScale = 1.12,
  edgeFade = 0.5,
  edgeBlur = 5,
  pauseOnHover = true,
  imageFit = 'cover',
  grayscale = 0,
  className = '',
  onItemClick,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const progressRef = useRef<number>(0);
  const targetProgressRef = useRef<number>(0);
  const autoSpeedRef = useRef<number>(0);
  const hoveredRef = useRef<boolean>(false);
  const visibleRef = useRef<boolean>(true);
  const draggingRef = useRef<boolean>(false);
  const lastPointerYRef = useRef<number>(0);
  const dragMovedRef = useRef<boolean>(false);
  const hoveredCardIndexRef = useRef<number | null>(null);

  const normalizedItems: SpiralItem[] = useMemo(
    () =>
      items.map((item, index) => {
        if (typeof item === 'string') {
          return {
            id: `spiral-item-${index}`,
            src: item,
            alt: `Project visual ${index + 1}`,
            title: `Project ${index + 1}`,
            category: 'Project',
          };
        }
        return {
          id: item.id ?? `spiral-item-${index}`,
          alt: item.alt ?? item.title ?? `Project visual ${index + 1}`,
          title: item.title ?? item.alt ?? `Project ${index + 1}`,
          category: item.category ?? 'Project',
          ...item,
        };
      }),
    [items]
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root || normalizedItems.length === 0) return;

    let frameId: number;
    let previousTime = performance.now();
    let bounds = root.getBoundingClientRect();
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const scrollEnabled = animationMode === 'scroll' || animationMode === 'all';
    const scrollSpeedMultiplier = Math.max(speed, 0) / 0.55;
    let lastScrollY = window.scrollY;

    const resizeObserver = new ResizeObserver(() => {
      bounds = root.getBoundingClientRect();
    });
    resizeObserver.observe(root);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    intersectionObserver.observe(root);

    const handleScroll = () => {
      const nextScrollY = window.scrollY;
      const scrollDelta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;
      if (!scrollEnabled || !visibleRef.current || scrollDelta === 0) return;
      targetProgressRef.current += clamp(
        (scrollDelta * scrollSpeedMultiplier) / Math.max(verticalSpacing * 2, 1),
        -1.5,
        1.5
      );
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = (time: number) => {
      const delta = Math.min((time - previousTime) / 1000, 0.05);
      previousTime = time;

      const autoEnabled = animationMode === 'auto' || animationMode === 'all';
      const motionPaused = draggingRef.current || (pauseOnHover && hoveredRef.current);
      const directionMultiplier = direction === 'down' ? -1 : 1;
      const desiredAutoSpeed =
        autoEnabled && visibleRef.current && !reducedMotion.matches && !motionPaused
          ? speed * directionMultiplier
          : 0;
      const speedBlend = 1 - Math.exp(-delta * 7);
      autoSpeedRef.current += (desiredAutoSpeed - autoSpeedRef.current) * speedBlend;
      targetProgressRef.current += autoSpeedRef.current * delta;

      const followBlend = 1 - Math.exp(-delta * (draggingRef.current ? 22 : 11));
      progressRef.current += (targetProgressRef.current - progressRef.current) * followBlend;

      const count = normalizedItems.length;
      const half = count / 2;
      const width = Math.max(bounds.width, 1);
      const height = Math.max(bounds.height, 1);
      const fit = Math.min(1, width / (cardWidth * 2.8), height / (cardHeight * 2.35));
      const responsiveRadius = Math.min(radius, Math.max(72, width * 0.36)) * fit;
      const fadeStart = clamp(1 - edgeFade, 0, 0.98);
      const turnSize = Math.max(cardsPerTurn, 1);

      // 1. Identify the single card closest to the center of the helix
      let minAbsOffset = Infinity;
      let closestCenterIndex = -1;

      for (let i = 0; i < count; i++) {
        let offset = i - progressRef.current;
        offset = modulo(offset + half, count) - half;
        const absOffset = Math.abs(offset);
        if (absOffset < minAbsOffset) {
          minAbsOffset = absOffset;
          closestCenterIndex = i;
        }
      }

      // 2. Render each card along the helix
      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        let offset = index - progressRef.current;
        offset = modulo(offset + half, count) - half;

        // ONLY the center card can show project details on hover!
        const isCardCenter = index === closestCenterIndex;
        const isCardHovered = hoveredCardIndexRef.current === index;
        const shouldPopOut = isCardCenter && isCardHovered;

        const edge = Math.min(Math.abs(offset) / Math.max(half, 1), 1);
        const opacity = 1 - smoothstep(fadeStart, 1, edge);
        const focus = 1 - Math.min(Math.abs(offset) / Math.max(turnSize * 0.65, 1), 1);
        const scale = (1 + (centerScale - 1) * focus) * fit;
        const angle = offset * (360 / turnSize) + rotation;
        const angleRadians = (angle * Math.PI) / 180;
        const x = Math.sin(angleRadians) * responsiveRadius;
        const z = Math.cos(angleRadians) * responsiveRadius;
        const depthScale = clamp(perspective / Math.max(perspective - z, 1), 0.72, 1.45);

        const visualScale = shouldPopOut ? scale * depthScale * 1.15 : scale * depthScale;
        const depth = (z / Math.max(responsiveRadius, 1) + 1) / 2;
        const blur = shouldPopOut ? 0 : edgeBlur * smoothstep(0.35, 1, edge);
        const popOutZ = shouldPopOut ? 45 : 0;
        const finalOpacity = shouldPopOut ? 1 : opacity;

        card.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${offset * verticalSpacing * fit}px, ${popOutZ}px) rotateZ(${cardTilt}deg) scale(${visualScale})`;
        card.style.opacity = finalOpacity.toFixed(3);
        card.style.filter = blur > 0.01 ? `blur(${blur.toFixed(2)}px)` : 'none';
        card.style.zIndex = shouldPopOut ? '999999' : String(Math.round(depth * 100000) + index);
        card.style.pointerEvents = opacity > 0.25 || shouldPopOut ? 'auto' : 'none';

        // Toggle hover popout CSS class exclusively for center card
        if (shouldPopOut) {
          card.classList.add('is-hovered');
        } else {
          card.classList.remove('is-hovered');
        }
      });

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    normalizedItems,
    speed,
    direction,
    animationMode,
    radius,
    perspective,
    cardWidth,
    cardHeight,
    verticalSpacing,
    cardsPerTurn,
    rotation,
    cardTilt,
    centerScale,
    edgeFade,
    edgeBlur,
    pauseOnHover,
  ]);

  const rootStyle: React.CSSProperties = {
    perspective: `${perspective}px`,
    ['--infinite-spiral-card-width' as any]: `${cardWidth}px`,
    ['--infinite-spiral-card-height' as any]: `${cardHeight}px`,
    ['--infinite-spiral-card-radius' as any]: `${cardRadius}px`,
    cursor: animationMode === 'drag' || animationMode === 'all' ? 'grab' : 'default',
    touchAction: animationMode === 'drag' || animationMode === 'all' ? 'pan-x' : 'auto',
    userSelect: animationMode === 'drag' || animationMode === 'all' ? 'none' : 'auto',
  };

  const dragEnabled = animationMode === 'drag' || animationMode === 'all';

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    event.currentTarget.style.cursor = dragEnabled ? 'grab' : 'default';
  };

  const handleCardClick = (item: SpiralItem, index: number, event: React.MouseEvent) => {
    if (dragMovedRef.current) return;
    if (item.onClick) {
      item.onClick();
    } else if (onItemClick) {
      onItemClick(item, index);
    }
  };

  return (
    <div
      ref={rootRef}
      className={`infinite-spiral ${className}`.trim()}
      style={rootStyle}
      onMouseEnter={() => {
        hoveredRef.current = true;
      }}
      onMouseLeave={() => {
        hoveredRef.current = false;
        hoveredCardIndexRef.current = null;
      }}
      onPointerDown={(event) => {
        if (!dragEnabled || event.button !== 0) return;
        draggingRef.current = true;
        dragMovedRef.current = false;
        lastPointerYRef.current = event.clientY;
        targetProgressRef.current = progressRef.current;
        event.currentTarget.setPointerCapture(event.pointerId);
        event.currentTarget.style.cursor = 'grabbing';
      }}
      onPointerMove={(event) => {
        if (!draggingRef.current) return;
        const pointerDelta = event.clientY - lastPointerYRef.current;
        lastPointerYRef.current = event.clientY;
        if (Math.abs(pointerDelta) > 0.5) dragMovedRef.current = true;
        targetProgressRef.current -= pointerDelta / Math.max(verticalSpacing, 1);
      }}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onClickCapture={(event) => {
        if (!dragMovedRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        dragMovedRef.current = false;
      }}
    >
      <div className="infinite-spiral__stage" role="list" aria-label="Interactive Project Spiral Gallery">
        {normalizedItems.map((item, index) => {
          const Card = item.href ? 'a' : 'div';
          return (
            <Card
              key={item.id ?? `${item.src}-${index}`}
              ref={(node: HTMLElement | null) => {
                cardRefs.current[index] = node;
              }}
              className="infinite-spiral__item group"
              style={{
                width: cardWidth,
                height: cardHeight,
                borderRadius: cardRadius,
              }}
              href={item.href}
              target={item.target}
              rel={item.target === '_blank' ? 'noreferrer' : undefined}
              role="listitem"
              aria-label={item.label ?? item.title ?? item.alt}
              onMouseEnter={() => {
                hoveredCardIndexRef.current = index;
              }}
              onMouseLeave={() => {
                if (hoveredCardIndexRef.current === index) {
                  hoveredCardIndexRef.current = null;
                }
              }}
              onClick={(e) => handleCardClick(item, index, e)}
            >
              <div className="infinite-spiral__card-inner">
                {/* Project Image */}
                <img
                  className="infinite-spiral__image"
                  src={item.src}
                  alt={item.alt}
                  loading={index < 6 ? 'eager' : 'lazy'}
                  draggable={false}
                  style={{
                    width: cardWidth,
                    height: cardHeight,
                    maxWidth: 'none',
                    maxHeight: 'none',
                    objectFit: imageFit,
                    filter: `grayscale(${Math.min(1, Math.max(0, grayscale))})`,
                  }}
                />

                {/* Minimalist Pop-out Glass Pill: ONLY visible on center card hover */}
                <div className="infinite-spiral__overlay">
                  <div className="flex items-center justify-between w-full px-3 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-md">
                    <div className="flex items-center gap-1.5 min-w-0 pr-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] shrink-0" />
                      <span className="text-xs font-bold text-slate-900 truncate tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-bold text-[#0284C7] shrink-0 flex items-center gap-0.5">
                      View ↗
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteSpiral;
