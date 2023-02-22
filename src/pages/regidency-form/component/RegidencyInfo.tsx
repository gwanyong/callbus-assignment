import React, { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import themes from '../../../styles/themes';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { categoryState } from '../../../recoil/categoryState';

const RegidencyInfo = () => {
  const { register, setValue, watch } = useFormContext();
  const category = useRecoilValue(categoryState);

  const navigate = useNavigate();

  const rentalFee = Number(watch('rental-fee'));

  const refund =
    rentalFee * 0.17 * 2 + rentalFee * 0.12 * 58 <= 750
      ? rentalFee * 0.17 * 2 + rentalFee * 0.12 * 58
      : 750;

  //수정하기 버튼 클릭 시
  const handleOnEditBtn = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <__Container>
      <__Header>
        {category === 'monthly' && (
          <>
            <__Info>
              내 월세 환급금은 최대 <span>{Math.round(refund)}만원</span>입니다.
              <br /> 자리톡으로 환급 신청하세요 👇
            </__Info>
            <__Desc>
              해당 금액은 확정된 것이 아니며 세액공제 자격조건,
              <br />
              세금납부 및 공제이력에 따라 변동될 수 있습니다.
            </__Desc>
          </>
        )}

        <__EditBtn onClick={(e) => handleOnEditBtn(e)}>
          임대비용 수정하기
        </__EditBtn>
      </__Header>
      <__SectionWrapper>
        <__Wrapper>
          <__Catgetory>거주 건물</__Catgetory>
          <__AddressWrapper>
            <__AddressInput
              {...register('address')}
              required
              type="text"
              maxLength={30}
              placeholder="살고 계신 건물주소 또는 건물명을 입력하세요."
            />
            <img alt={'search-img'} src={'/images/search.png'} />
          </__AddressWrapper>
          <__InfoWrapper>
            <img alt="info-image" src="/images/info-icon.png" />
            <p>
              과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환
              <br />
              급도 현재 거주지를 입력해야 합니다.)
            </p>
          </__InfoWrapper>
          <__GridWrapper>
            <__Catgetory>호실</__Catgetory>
            <__Catgetory>세입자(본인) 이름</__Catgetory>
            <__InputWrapper>
              <__Input
                {...register('room-number')}
                type="text"
                maxLength={30}
                required
                placeholder="예) 101"
              />
              호
            </__InputWrapper>
            <__InputWrapper>
              <__Input
                {...register('name')}
                required
                type="text"
                maxLength={30}
                placeholder="예) 홍길동"
              />
            </__InputWrapper>
          </__GridWrapper>
          {watch('address') && watch('room-number') && watch('name') && (
            <>
              <__GridWrapper>
                <__Catgetory>계약시작일</__Catgetory>
                <__Catgetory>계약종료일</__Catgetory>
                <__InputWrapper>
                  <Controller
                    name="started"
                    render={({ field: { onChange, name } }) => (
                      <DatePicker
                        placeholderText="선택해주세요"
                        dateFormat="yyyy-MM-dd"
                        selected={watch('started')}
                        customInput={
                          <__Input
                            value={watch('started')}
                            required
                            placeholder="선택해주세요"
                          />
                        }
                        onChange={(date) => setValue('started', date)}
                        maxLength={6}
                      />
                    )}
                  />
                </__InputWrapper>
                <__InputWrapper>
                  <Controller
                    name="ended"
                    render={({ field: { onChange, name } }) => (
                      <DatePicker
                        placeholderText="선택해주세요"
                        dateFormat="yyyy-MM-dd"
                        selected={watch('ended')}
                        customInput={
                          <__Input
                            // {...register('ended')}
                            required
                            placeholder="선택해주세요"
                          />
                        }
                        onChange={(date) => setValue('ended', date)}
                        maxLength={6}
                      />
                    )}
                  />
                </__InputWrapper>
              </__GridWrapper>
              <__InfoWrapper>
                <img alt="info-image" src="/images/info-icon.png" />
                <p>정확히 모를 경우 임의로 작성 후 수정요청 하세요.</p>
              </__InfoWrapper>
            </>
          )}
          {watch('started') && watch('ended') && (
            <>
              <__Catgetory>임대인 휴대폰 번호</__Catgetory>
              <__PhoneWrapper>
                <__AddressInput
                  {...register('phone')}
                  required
                  type="text"
                  minLength={10}
                  maxLength={11}
                  placeholder="임대인(현재 집주인) 휴대폰 번호를 입력해주세요."
                />
              </__PhoneWrapper>
              <__InfoWrapper>
                <img alt="info-image" src="/images/info-icon.png" />
                <p>
                  임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수
                  있습니다.
                </p>
              </__InfoWrapper>

              <__SaftyDesc>
                세계 최고 AWS 보안으로 모든 정보는 안전하게 보호됩니다.
              </__SaftyDesc>
              <__ConfirmBtn type="submit">완료</__ConfirmBtn>
            </>
          )}
        </__Wrapper>
      </__SectionWrapper>
    </__Container>
  );
};

export default RegidencyInfo;

const __Container = styled.div`
  width: 100%;
`;

const __Header = styled.header`
  padding: 32px 0;
  background-color: ${themes.color.white};
  text-align: center;
`;

const __Info = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;

  span {
    color: ${themes.color.blue};
  }
`;

const __Desc = styled.p`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 500;
  color: ${themes.color.grey};
  line-height: 18px;
`;

const __EditBtn = styled.button`
  margin-top: 16px;
  font-size: 12px;
  font-weight: 500;
  color: #7a7a7a;
  text-decoration: underline;
`;

const __Catgetory = styled.h4`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
`;

const __Wrapper = styled.section`
  margin-top: 25px;
`;

const __SectionWrapper = styled.div`
  padding: 0 16px;
`;
const __AddressWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 12px;
  background-color: ${themes.color.white};
  border-radius: 4px;
`;

const __PhoneWrapper = styled(__AddressWrapper)``;
const __AddressInput = styled.input`
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: ${themes.color.grey};
  }
`;

const __InfoWrapper = styled.div`
  display: flex;
  align-items: start;
  margin: 8px 0 24px;
  font-size: 14px;
  font-weight: 500;

  &:nth-child(6) {
    display: flex;
    align-items: center;
  }

  img {
    width: 16px;
  }

  p {
    margin-left: 4px;
    font-size: 12px;
    color: #7a7a7a;
    line-height: 16px;
  }
`;

const __GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 24px;

  .datepicker {
    display: none;
  }
`;

const __InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 7px 16px 12px;
  background-color: ${themes.color.white};
  border: 1px solid #e8e8e8;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;
  &:nth-child(3) {
    border-right: 0;
    border-radius: 4px 0 0 4px;
  }

  &:nth-child(4) {
    border-radius: 0 4px 4px 0;
  }
`;

const __Input = styled.input`
  width: 100%;
  text-align: start;

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: ${themes.color.grey};
  }
`;

const __SaftyDesc = styled.p`
  color: #7a7a7a;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

const __ConfirmBtn = styled.button`
  margin-top: 12px;
  width: 100%;
  height: 48px;
  color: ${themes.color.white};
  font-weight: 700;
  font-size: 16px;
  background-color: ${themes.color.blue};
  border-radius: 8px;
`;
