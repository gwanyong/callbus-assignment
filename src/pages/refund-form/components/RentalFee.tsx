import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import themes from '../../../styles/themes';
import JeonseForm from './JeonseForm';
import MonthlyRentalForm from './MonthlyRentalForm';

const RentalFee = () => {
  const { register, setFocus, getValues, watch, handleSubmit } =
    useFormContext();

  const [category, setIsCategory] = useState('monthly');

  // 월세 , 전세 버튼 클릭시 폼 노출
  const selectedCategory = () => {
    switch (true) {
      case category === 'jeonse':
        return <JeonseForm />;
      default:
        return <MonthlyRentalForm />;
    }
  };

  const handleOnCheckBtn = () => {
    console.log(123);
  };

  return (
    <__Container>
      <__Header>
        <__Info>
          전월세 비용을 입력하시면
          <br />내 월세 환급금을 알려드려요 👇
        </__Info>
      </__Header>
      <__Wrapper>
        <__CategoryBox>
          <__Catgetory>임대 유형</__Catgetory>
          <__ButtonWrapper>
            <__RentalTypeBtn
              category={category === 'monthly'}
              onClick={() => setIsCategory('monthly')}
            >
              월세
            </__RentalTypeBtn>
            <__RentalTypeBtn
              category={category === 'jeonse'}
              onClick={() => setIsCategory('jeonse')}
            >
              전세
            </__RentalTypeBtn>
          </__ButtonWrapper>
        </__CategoryBox>

        <__CostBox>
          <__Catgetory>임대 비용</__Catgetory>
          <__InfoWrapper>
            <img alt="info-image" src="/images/info-icon.png" />
            <p>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요.</p>
          </__InfoWrapper>
          <__InfoWrapper>
            <img alt="info-image" src="/images/info-icon.png" />
            <p>비용 입력시 고지서가 무료로 제공됩니다.</p>
          </__InfoWrapper>
          {selectedCategory()}
        </__CostBox>
        <__CheckedBtnWrapper>
          <__CheckBtn onClick={handleOnCheckBtn} />
          <img src="/images/disabled.png" />
          <p>관리비는 관리실에 따로 납부하거나 없습니다.</p>
        </__CheckedBtnWrapper>
      </__Wrapper>
      <__ConfirmBtn>금액 확인하기 👆</__ConfirmBtn>
      <__GuideInfo>
        환급금만 확인해도 월세고지서가 무료로 제공됩니다.
      </__GuideInfo>
    </__Container>
  );
};

export default RentalFee;

const __Container = styled.div`
  padding: 0 20px;
  width: 100%;
`;

const __Header = styled.header`
  margin: 40px 0 50px;
`;

const __Info = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 27px;
`;

const __Wrapper = styled.section``;

const __CategoryBox = styled.div``;

const __Catgetory = styled.h4`
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 500;
`;

const __ButtonWrapper = styled.div`
  display: flex;
`;

const __RentalTypeBtn = styled.button<{ category: boolean }>`
  width: 100%;
  height: 44px;
  color: ${(props) =>
    props.category ? themes.color.white : themes.color.black};
  background-color: ${(props) =>
    props.category ? themes.color.blue : themes.color.white};
  border-radius: 3px 0px 0px 3px;

  &:last-child {
    border-radius: 0px 3px 3px 0px;
  }
`;

const __CostBox = styled.div`
  margin-top: 48px;
`;

const __InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 500;

  img {
    width: 14px;
  }

  p {
    margin-left: 5px;
    font-size: 12px;
    font-weight: 500;
    color: #7a7a7a;
  }
`;
const __CheckedBtnWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 16px;

  img {
    margin-right: 6px;
  }

  p {
    font-size: 14px;
  }
`;

const __CheckBtn = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const __ConfirmBtn = styled.button`
  margin-top: 31px;
  padding: 14px;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  color: ${themes.color.white};
  background-color: ${themes.color.blue};
  border-radius: 8px;
`;

const __GuideInfo = styled.p`
  margin-top: 11px;
  font-size: 12px;
  text-align: center;
  color: #7a7a7a;
`;
