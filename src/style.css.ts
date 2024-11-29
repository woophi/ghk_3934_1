import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const bottomBtn = style({
  position: 'fixed',
  zIndex: 2,
  width: '100%',
  padding: '12px',
  bottom: 0,
});

const container = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
});

const box = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  gap: '1rem',
  borderRadius: '1rem',
  backgroundColor: '#F3F4F5',
});

const rowSB = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const rowImg = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});
const rowBtns = style({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '8px',
});

const detail = style({
  display: 'flex',
  padding: '1rem',
  flexDirection: 'column',
  backgroundColor: '#F3F4F5',
  borderRadius: '1rem',
  width: '100%',
});
const detailRow = recipe({
  base: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  variants: {
    opened: {
      true: {
        marginBottom: '1rem',
      },
    },
  },
});

export const bsContent = style({
  padding: 0,
});

export const appSt = {
  bottomBtn,
  container,
  box,
  rowSB,
  rowImg,
  rowBtns,
  detail,
  detailRow,
  bsContent,
};
