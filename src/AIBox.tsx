import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Typography } from '@alfalab/core-components/typography';
import { ReactNode, useState } from 'react';
import robotBs from './assets/robot_bs.jpg';
import { appSt } from './style.css';

type Props = {
  img: string;
  title: string;
  subtitle: string;
  price: string;
  moreInfoClick: () => void;
  preOrderClick: () => void;
  preOrderClickBS: () => void;
  backBS: () => void;
  onCloseBS: () => void;

  bsText: ReactNode;
};

export const AIBox = ({
  img,
  moreInfoClick,
  preOrderClick,
  preOrderClickBS,
  backBS,
  onCloseBS,
  price,
  subtitle,
  title,
  bsText,
}: Props) => {
  const [bsOpened, setOpenBS] = useState(false);

  const closeBs = () => {
    onCloseBS();
    setOpenBS(false);
  };

  return (
    <>
      <div className={appSt.box}>
        <div className={appSt.rowImg}>
          <img src={img} width={48} height={48} />

          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
              {title}
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              {subtitle}
            </Typography.Text>
          </div>
        </div>

        <div>
          <div className={appSt.rowSB}>
            <Typography.Text view="primary-small">Доступные активы:</Typography.Text>
            <Typography.Text view="primary-small" color="positive" weight="bold">
              биржевые
            </Typography.Text>
          </div>
          <div className={appSt.rowSB} style={{ marginTop: '4px' }}>
            <Typography.Text view="primary-small">Стоимость</Typography.Text>
            <Typography.Text view="primary-small" weight="bold">
              {price}
            </Typography.Text>
          </div>
        </div>

        <div className={appSt.rowBtns}>
          <ButtonMobile
            onClick={() => {
              moreInfoClick();
              setOpenBS(true);
            }}
            style={{ padding: '0 .5rem' }}
            shape="rounded"
            size="xs"
            block
            view="filled"
          >
            Подробнее
          </ButtonMobile>
          <ButtonMobile
            onClick={preOrderClick}
            style={{ padding: '0 .5rem' }}
            shape="rounded"
            size="xs"
            block
            view="primary"
          >
            Оформить предзаказ
          </ButtonMobile>
        </div>
      </div>

      <BottomSheet
        open={bsOpened}
        onClose={closeBs}
        stickyHeader
        hasCloser
        contentClassName={appSt.bsContent}
        actionButton={
          <div className={appSt.rowBtns}>
            <ButtonMobile
              onClick={() => {
                backBS();
                setOpenBS(false);
              }}
              style={{ padding: '0 .5rem' }}
              shape="rounded"
              size="xs"
              block
              view="filled"
            >
              Назад
            </ButtonMobile>
            <ButtonMobile
              onClick={preOrderClickBS}
              style={{ padding: '0 .5rem' }}
              shape="rounded"
              size="xs"
              block
              view="primary"
            >
              Заказать
            </ButtonMobile>
          </div>
        }
      >
        <img src={robotBs} width="100%" height={280} style={{ objectFit: 'cover' }} />
        <div className={appSt.container}>{bsText}</div>
      </BottomSheet>
    </>
  );
};
