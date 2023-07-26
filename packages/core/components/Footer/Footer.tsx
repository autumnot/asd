import styled from '@emotion/styled';
import { Link } from '@nextui-org/react';

import { authorName, defaultUrl } from '../../constants';

export function Footer() {
  const date = new Date();

  return (
    <StyledFooter>
      <span>
        Copyright &copy; {date.getFullYear()}{' '}
        <Link href={defaultUrl} target="_blank">
          {authorName}
        </Link>{' '}
        All rights reserved.
        <br />
        작은성장의 의미를 아는 미래가 얼마나 부러운지
        <br />
        <br />
        little birds can remember :)
        <br />
      </span>

      
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  padding: 0 1.3125rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  font-size: 0.75rem;
`;
