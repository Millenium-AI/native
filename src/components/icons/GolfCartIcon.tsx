import golfCartSvg from '../img/golf-cart.svg';

export const GolfCartIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1024 544"
    className={className}
    fill="currentColor"
  >
    <use href={`${golfCartSvg}#Layer_1`} />
  </svg>
);