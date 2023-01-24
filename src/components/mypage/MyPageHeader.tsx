import styled from '@emotion/styled';
import COLOR from '@src/common/constants/Colors';
import Image from 'next/image';
import React from 'react';
import { SettingIcon } from '../icons/SystemIcons';

const MyPageHeader = ({ name, email, profileImage }: { name: string; email: string; profileImage: string }) => {
  return (
    <Container>
      <ProfileContainer>
        <ImageWrapper>
          <ProfileImage width={64} height={64} alt="Profile Picture" src={profileImage} />
          <SettingIconWrapper>
            <SettingIcon onClick={() => {}} />
          </SettingIconWrapper>
        </ImageWrapper>

        <UserName>{name}</UserName>
        <UserEmail>{email}</UserEmail>
      </ProfileContainer>
      <DataContainer>
        <DataColumn>
          <DataColumnTitle>성공한 클래스</DataColumnTitle>
          <DataColumnNumber>3</DataColumnNumber>
        </DataColumn>
        <DataColumn>
          <DataColumnTitle isActive>진행중인 클래스</DataColumnTitle>
          <DataColumnNumber isActive>1</DataColumnNumber>
        </DataColumn>
      </DataContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 17.5rem;
  background-color: ${COLOR.BACKGROUND50};
  border-bottom: 0.25rem solid ${COLOR.GRAY50};
`;

const ProfileContainer = styled.div`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  margin-bottom: 0.5rem;
`;

const ImageWrapper = styled.div`
  position: relative;
  border: 3px solid ${COLOR.GRAY200};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

const SettingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${COLOR.PURPLE500};
  bottom: -2px;
  right: -2px;
  border-radius: 100%;
`;

const UserName = styled.p`
  width: 100%;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
  margin: 0.3rem 0;
`;

const UserEmail = styled.p`
  width: 100%;
  text-align: center;
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${COLOR.GRAY400};
`;

const DataContainer = styled.div`
  width: 100%;
  height: 5.625rem;
  display: flex;
  justify-content: center;
`;

const DataColumn = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const DataColumnTitle = styled.p<{ isActive?: boolean }>`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${COLOR.GRAY500};
  width: 100%;
  text-align: center;
  margin: 0;
  border-left: ${(props) => props.isActive && `1px solid ${COLOR.GRAY100}`};
`;

const DataColumnNumber = styled.p<{ isActive?: boolean }>`
  font-style: normal;
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${(props) => (props.isActive ? COLOR.PURPLE500 : COLOR.GRAY600)};
  margin: 0;
`;

export default MyPageHeader;