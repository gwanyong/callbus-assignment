import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import themes from '../../../styles/themes';

const MonthlyRentalForm = () => {
  const { register, setFocus, getValues, watch } = useFormContext();
  return (
    <__InputContainer>
      <__InputWrapper>
        <p>보증금</p>
        <__DepositInput {...register('phoneNumber')} autoFocus />
        만원
      </__InputWrapper>

      <__InputWrapper>
        <p>월 임대료</p>
        <__DepositInput {...register('phoneNumber')} />
        만원
      </__InputWrapper>
      <__InputWrapper>
        <p>월 관리비</p>
        <__DepositInput {...register('phoneNumber')} />
        만원
      </__InputWrapper>
      <__InputWrapper>
        <p>임대료 납부일</p>
        <__DepositInput {...register('phoneNumber')} />일
      </__InputWrapper>
    </__InputContainer>
  );
};

export default MonthlyRentalForm;

const __InputContainer = styled.div`
  display: grid;
  grid-row-gap: 8px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3px;
`;

const __InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 8px 16px 12px;
  background-color: ${themes.color.white};
  border: 1px solid #e8e8e8;
  white-space: nowrap;
  font-size: 14px;
  font-weight: 500;

  &:nth-child(1),
  :nth-child(3) {
    border-right: none;
    border-radius: 4px 0 0 4px;
  }
  &:nth-child(2),
  :nth-child(4) {
    border-radius: 0 4px 4px 0;
  }

  p {
    width: 56px;
    font-size: 14px;
    color: ${themes.color.grey};
  }
`;

const __DepositInput = styled.input`
  width: 100%;
  padding-right: 3px;
  text-align: end;
`;
