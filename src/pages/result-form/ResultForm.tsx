import dayjs from 'dayjs';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { categoryState } from '../../recoil/categoryState';
import themes from '../../styles/themes';

const ResultForm = () => {
  const { getValues } = useFormContext();
  const category = useRecoilValue(categoryState);

  //문자앱 실행
  const handleOnSmsBtn = (e) => {
    e.preventDefault();
    location.href = 'sms:' + getValues('phone');
  };

  //전화앱 실행
  const handleOnCallBtn = (e) => {
    e.preventDefault();
    location.href = 'tel:' + getValues('phone');
  };

  return (
    <__Container>
      <__Header>
        <img alt="addreess" src={'/images/residence.png'} />
        <p>{getValues('address')}</p>
      </__Header>
      <__PaddingBox>
        <__ListWrapper>
          <__Label>임대유형</__Label>
          <__contents>{category === 'monthly' ? '월세' : '전세'}</__contents>
          <__Label>월임대료</__Label>
          <__contents>
            {category === 'monthly' ? getValues('rental-fee') : 0}만원
          </__contents>
          <__Label>보증금</__Label>
          <__contents>{getValues('deposit')}만원</__contents>
          <__Label>월관리비</__Label>
          <__contents>{getValues('monthly-cost')}만원</__contents>
        </__ListWrapper>
        <__ListWrapper>
          <__Label>납부일</__Label>
          <__contents>매달 {getValues('due-date')}일</__contents>
          <__Label>납부총액</__Label>
          <__contents>
            <span>
              {category === 'monthly'
                ? Number(getValues('rental-fee')) +
                  Number(getValues('monthly-cost'))
                : Number(getValues('monthly-cost'))}
              만원
            </span>
          </__contents>
        </__ListWrapper>
        <__DateWrapper>
          <__Label>계약기간</__Label>
          <__DueDate>
            {dayjs(getValues('started')).format('YYYY. MM. DD')} ~{' '}
            {dayjs(getValues('ended')).format('YYYY. MM. DD')}
          </__DueDate>
        </__DateWrapper>

        <__ButtonWrapper>
          <button onClick={(e) => handleOnSmsBtn(e)}>
            <img alt={'call-icon'} src={'/images/sms.png'} />
            임대인 문자
          </button>
          <button onClick={(e) => handleOnCallBtn(e)}>
            <img alt={'call-icon'} src={'/images/call.png'} />
            임대인 전화
          </button>
        </__ButtonWrapper>
      </__PaddingBox>
    </__Container>
  );
};

export default ResultForm;

const __Container = styled.div`
  margin-top: 20px;
  background-color: ${themes.color.white};
  width: 100%;
  box-shadow: 0px 0px 7px 2px rgba(180, 180, 180, 0.05);
  border-radius: 6px;
`;

const __Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-bottom: 16px;
  padding: 12px 10px;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;

  p {
    margin-left: 8px;
    font-size: 14px;
    font-weight: 700;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const __ListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  line-height: 23px;
`;

const __Label = styled.p`
  margin-bottom: 6px;
  width: 49px;
  font-size: 14px;
  font-weight: 700;
  color: ${themes.color.grey};
`;

const __contents = styled.p`
  font-size: 14px;

  span {
    font-weight: 700;
  }
`;

const __PaddingBox = styled.div`
  padding: 0 16px;
`;

const __DateWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  padding-top: 16px;
  border-top: 1px solid #f2f2f2;
`;

const __DueDate = styled.p`
  margin-left: 33px;
`;

const __ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  padding-bottom: 20px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 47px;
    border: 1px solid #c8c8c8;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #7a7a7a;

    &:first-child {
      margin-right: 8px;
    }

    img {
      margin-right: 4px;
    }
  }
`;
