import golfCartImg from '../img/golf-cart.png';

export const GolfCartIcon = ({ className }: { className?: string }) => (
  <img
    src={golfCartImg}
    alt="Golf Cart"
    className={className}
    style={{ filter: 'brightness(0) saturate(100%) invert(40%) sepia(98%) saturate(300%) hue-rotate(118deg)' }}
  />
);